import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import FadeIn from '../Animations/FadeIn';
import ConsultationForm from './ConsultationForm';

interface ReadyToTalkProps {
    className?: string;
}

const ReadyToTalk: React.FC<ReadyToTalkProps> = ({ className = '' }) => {
    const [showConsultationForm, setShowConsultationForm] = useState(false);

    return (
        <>
            <section className={`py-20 bg-nayaysetu text-white ${className}`}>
                <FadeIn direction="up" className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Talk to an Expert?</h2>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
                        Get clear answers about your property rights. Our consultations are confidential, strategic, and no-obligation.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Button
                            variant="secondary"
                            size="large"
                            onClick={() => setShowConsultationForm(true)}
                            className="shadow-xl hover:shadow-2xl px-8 py-4 text-lg font-semibold"
                        >
                            Book Free Consultation
                        </Button>
                        <Link to="/contact">
                            <Button
                                variant="outlined"
                                size="large"
                                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-nayaysetu px-8 py-4 text-lg"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-nayaysetu-gold/90 font-medium uppercase tracking-wide">
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-nayaysetu-gold mr-2"></span>
                            100% Confidential
                        </span>
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-nayaysetu-gold mr-2"></span>
                            No Obligation
                        </span>
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-nayaysetu-gold mr-2"></span>
                            Expert Review
                        </span>
                    </div>
                </FadeIn>
            </section>

            {showConsultationForm && (
                <ConsultationForm onClose={() => setShowConsultationForm(false)} />
            )}
        </>
    );
};

export default ReadyToTalk;
