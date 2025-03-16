/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductType } from "@/constants/helpers/type";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  try {
    const body = await request.json();
    console.log("Checkout Request Data:", body);
    const { items, email } = await body;
    const extractingItems = await items?.map((item: ProductType) => ({
      quantity: item?.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(
          item?.price * 100 * (1 - item?.discountPercentage / 100)
        ),
        product_data: {
          name: item?.title,
          description: item?.description,
          images: item?.images,
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: extractingItems,
      mode: "payment",
      success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_URL}`,
      metadata: {
        email,
      },
    });
    console.log(session);
    return NextResponse.json({
      message: "Checkout successful!",
      success: true,
      id: session?.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
