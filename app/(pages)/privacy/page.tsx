import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#018578] mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Krenital Pharma</strong>, your privacy is very important to
        us. This website has been developed purely for the purpose of showcasing
        our range of pharmaceutical gummy products, including our Kids and Adult
        Gummies. We do not sell products directly through the website, and no
        online transactions are processed here.
      </p>
      <p className="mb-4">
        We may collect basic personal details such as your name, email address,
        and phone number only when you voluntarily fill out our “Contact Us”
        form. This information is used exclusively to respond to your inquiries,
        provide more information about our products, and maintain professional
        communication. Your data will never be shared, sold, or used outside of
        this scope.
      </p>
      <p className="mb-4">
        Krenital Pharma is fully committed to maintaining the confidentiality
        and security of your information. We follow responsible practices to
        ensure your personal details are handled with care and respect.
      </p>
      <p className="mb-4">
        <strong>For any questions or concerns:</strong>
        <br />
        Email:{" "}
        <Link
          href="mailto:Krenitalpharma@gmail.com"
          className="text-[#018578] underline"
        >
          Krenitalpharma@gmail.com
        </Link>
        <br />
        Phone:{" "}
        <Link href="tel:+918401295461" className="text-[#018578] underline">
          +91 84012 95461
        </Link>
        <br />
        Address: 18-A Parth Agriculture, Near Vankar Samaj Hostel, Hansapur,
        Patan, Gujarat, India
      </p>
    </main>
  );
}
