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
        <div className="pt-24 pb-20">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <FadeIn direction="down" className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-nayaysetu mb-6">
                        Meet Our Team
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our diverse team of attorneys brings decades of experience and specialized knowledge to help you navigate complex legal challenges.
                    </p>
                </FadeIn>

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
    );
};

export default Team;
