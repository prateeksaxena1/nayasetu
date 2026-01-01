import React, { useEffect } from 'react';

import TeamMemberCard from '../components/UI/TeamMemberCard';
import { team } from '../data/team';
import FadeIn from '../components/Animations/FadeIn';
import StaggerChildren, { StaggerItem } from '../components/Animations/StaggerChildren';

const Team: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="relative py-24 bg-nayaysetu text-white">
                <div className="container mx-auto px-4 text-center">
                    <FadeIn direction="down">
                        <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Our diverse team of attorneys brings decades of experience and specialized knowledge to help you navigate complex legal challenges.
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4">

                    {/* Team Grid */}
                    <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {team.map((member) => (
                            <StaggerItem key={member.id}>
                                <TeamMemberCard member={member} />
                            </StaggerItem>
                        ))}
                    </StaggerChildren>
                </div>
            </div>
        </div>
    );
};

export default Team;
