'use client'
import { useState } from 'react';

export default function Faqs() {
    // Array of FAQ items
    const faqs = [
        {
            question: 'How do I find the right musician or band for my event?',
            answer: 'Our advanced search filters allow you to narrow down your options by genre, location, budget, event type, and availability. You can also browse artist profiles, listen to their music samples, and read client reviews to help you make the best choice.',
        },
        {
            question: 'What types of musical acts do you offer?',
            answer: 'We feature a diverse roster of musicians, including solo artists, bands of all sizes, orchestras, DJs, and more.  We cover a wide range of genres, from classical and jazz to rock, pop, country, and world music.',
        },
        {
            question: 'Do you also offer instrument rentals?',
            answer: 'Yes, we have a wide selection of musical instruments available for rent, including guitars, keyboards, drums, strings, wind instruments, and more.  Browse our instrument rental section for details on pricing and availability.',
        },
        {
            question: 'How do I book a musician or rent an instrument?',
            answer: 'Once you\'ve found the perfect musician or instrument, you can contact them directly through their profile page or instrument listing.  You can also use our convenient booking forms to submit your request. We\'ll then connect you with the artist or rental provider to finalize the details.',
        },
        {
            question: 'What is the typical cost of hiring a musician or band?',
            answer: 'The cost varies depending on several factors, including the artist\'s popularity, experience, the length of the performance, the type of event, and the location.  We recommend contacting the artists directly for personalized quotes.',
        },
        {
            question: 'What if I need to cancel or reschedule my event?',
            answer: 'Our cancellation and rescheduling policies vary depending on the specific artist or rental agreement.  Please review the terms and conditions outlined in your contract or contact us for more information.',
        },
        {
            question: 'Do you handle contracts and payments?',
            answer: 'We can assist with contracts and payment processing to ensure a smooth and secure transaction.  We offer various payment options, and we can also help you negotiate the terms of your agreement with the artist or rental provider.',
        },
        {
            question: 'What if I have a specific request or need something unique?',
            answer: 'We are happy to accommodate special requests.  Contact us with your specific needs, and we\'ll do our best to find the perfect musical solution for your event.',
        },
        
        {
            question: 'How can I contact you if I have further questions?',
            answer: 'You can reach us through our "Contact Us" page, by email at [your email address], or by phone at [your phone number].  Our team is ready to assist you with any questions or concerns you may have.',
        },
    ];

    // State to manage the open/close state of each accordion item
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Function to toggle the accordion item
    const toggleAccordion = (index: number) => {
        setOpenIndex(prevOpenIndex => (prevOpenIndex === index ? null : index));
    };

    const firstColumnFaqs = faqs.slice(0, 5);
    const secondColumnFaqs = faqs.slice(5);

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    {/* Section header */}
                    <div className="pb-12 md:pb-20">
                        <h2 className="h2 font-sans">FAQs</h2>
                    </div>
                    {/* Two-column layout for FAQs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* First Column */}
                        <div>
                            {firstColumnFaqs.map((faq, index) => (
                                <div key={index} className="rounded-md shadow-sm overflow-hidden mb-4">
                                    <button
                                        className="w-full text-left py-3 px-4 font-sans font-medium text-xl flex justify-between items-center"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                            {openIndex === index ? '-' : '+'}
                                        </span>
                                    </button>
                                    <div
                                        className={`px-4 pb-3 text-slate-500 ${openIndex === index ? 'block' : 'hidden'}`}
                                    >
                                        {faq.answer}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Second Column */}
                        <div>
                            {secondColumnFaqs.map((faq, index) => {
                                const actualIndex = index + 5; // Adjust index for the second column
                                return (
                                    <div key={actualIndex} className="rounded-md shadow-sm overflow-hidden mb-4">
                                        <button
                                            className="w-full text-left py-3 px-4 font-sans font-medium text-xl flex justify-between items-center"
                                            onClick={() => toggleAccordion(actualIndex)}
                                        >
                                            <span>{faq.question}</span>
                                            <span className="transition-transform duration-200" style={{ transform: openIndex === actualIndex ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                                                {openIndex === actualIndex ? '-' : '+'}
                                            </span>
                                        </button>
                                        <div
                                            className={`px-4 pb-3 text-slate-500 ${openIndex === actualIndex ? 'block' : 'hidden'}`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
