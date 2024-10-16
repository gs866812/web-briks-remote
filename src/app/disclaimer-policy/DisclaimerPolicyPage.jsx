"use client";
import aos from "aos";
import Link from "next/link";
import { useEffect } from "react";

const DisclaimerPolicyPage = () => {
    useEffect(() => {
        aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="bg-gray-100 text-justify">
            {/* Hero Section */}
            <section
                data-aos="fade-up"
                style={{ backgroundImage: "url('https://iili.io/dhd9CUg.jpg')" }}
                className="bg-no-repeat bg-center bg-cover"
            >
                <div className="text-white py-10 lg:py-16 text-center bg-about-top">
                    <div className="container mx-auto px-5">
                        <h1 className="text-4xl font-bold mb-4">Disclaimer Policy</h1>
                        <p className="text-xl mb-6">
                            Please review our disclaimer policy carefully.
                        </p>
                    </div>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 mt-16"
            >
                <h2 className="text-3xl font-bold mb-4">Last Updated: [23/09/2024]</h2>
                <div className="space-y-5">
                    <p>
                        {`
            The information provided by Web Briks on [webbriks.com] is for general informational purposes only. All information on the Site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            `}
                    </p>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">External Links</h2>
                <div className="space-y-5">
                    <p>
                        {`
            Our Site may contain links to third-party websites that are not owned or controlled by Web Briks. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites you visit.
            `}
                    </p>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">Professional Advice</h2>
                <div className="space-y-5">
                    <p>
                        {`
            The information provided on this Site should not be considered professional advice. Always seek the advice of your professional advisors with any questions you may have regarding a specific service or issue.
            `}
                    </p>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
                <div className="space-y-5">
                    <p>
                        {`
            In no event shall Web Briks or its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation loss of profits, data, use, goodwill, or other intangible losses, arising from your access to or use of, or inability to access or use, the Site.
            `}
                    </p>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">Changes to This Disclaimer</h2>
                <div className="space-y-5">
                    <p>
                        {`
            We may update our disclaimer policy from time to time. We will notify you of any changes by posting the new disclaimer on this page. You are advised to review this disclaimer periodically for any changes. Changes to this disclaimer are effective when they are posted on this page.
            `}
                    </p>
                </div>
            </section>

            <section
                data-aos="fade-up"
                className="container mx-auto px-5 lg:px-20 text-gray-800 py-8"
            >
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <div className="space-y-5">
                    <p>
                        {`
            If you have any questions about this disclaimer, please contact us at: `}
                        <Link href="mailto:info@webbriks.com" className="text-blue-500 underline">
                            info@webbriks.com
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default DisclaimerPolicyPage;
