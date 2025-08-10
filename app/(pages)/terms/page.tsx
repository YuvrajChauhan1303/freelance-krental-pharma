import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#018578] mb-6">
        Terms and Conditions
      </h1>
      <p className="mb-4">
        Welcome to Krenital Pharma. By accessing and using our website, you
        agree to comply with and be bound by the following terms and conditions.
      </p>

      <ol className="list-decimal list-inside space-y-4">
        <li>
          <strong>Website Purpose:</strong> This website is solely for
          showcasing Krenital Pharma’s nutritional gummies. We do not offer
          online purchases or payment processing.
        </li>
        <li>
          <strong>User Information:</strong> Any data provided through the
          “Contact Us” form is used only for communication, as outlined in our
          Privacy Policy.
        </li>
        <li>
          <strong>Intellectual Property:</strong> All content—including text,
          images, and logos—is the property of Krenital Pharma. Unauthorized use
          is prohibited.
        </li>
        <li>
          <strong>Accuracy of Information:</strong> While we aim for accuracy,
          we don’t guarantee completeness or up-to-dateness of website content.
        </li>
        <li>
          <strong>External Links:</strong> We may link to third-party sites. We
          are not responsible for their content or policies.
        </li>
        <li>
          <strong>Limitation of Liability:</strong> Krenital Pharma is not
          liable for damages from using the website or relying on its
          information.
        </li>
        <li>
          <strong>Modifications:</strong> Terms may be updated without notice.
          Continued use confirms your acceptance.
        </li>
        <li>
          <strong>Contact:</strong> For any terms-related queries, contact us
          at:
          <br />
          <Link
            href="mailto:Krenitalpharma@gmail.com"
            className="text-[#018578] underline"
          >
            Krenitalpharma@gmail.com
          </Link>{" "}
          |{" "}
          <Link href="tel:+918401295461" className="text-[#018578] underline">
            +91 84012 95461
          </Link>
        </li>
      </ol>
    </main>
  );
}
