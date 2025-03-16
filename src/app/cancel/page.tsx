import Container from "@/components/Container";
import Title from "@/components/footer/Title";
import Link from "next/link";

const CancelPage = () => {
  return (
    <Container className="py-10 text-center">
      <Title className="text-red-500 text-center justify-center">
        Payment Canceled
      </Title>
      <p className="mt-3 text-gray-600">
        Your payment was not completed. You can try again or review your cart.
      </p>

      <Link href={"/cart"}>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
          Go Back to Cart
        </button>
      </Link>
    </Container>
  );
};

export default CancelPage;
