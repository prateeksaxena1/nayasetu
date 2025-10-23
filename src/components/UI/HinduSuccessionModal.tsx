import React from 'react';
import { X, ScrollText, Users, Scale, Gavel } from 'lucide-react';
import Button from './Button';

interface HinduSuccessionModalProps {
  onClose: () => void;
}

const HinduSuccessionModal: React.FC<HinduSuccessionModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-gray-900">Understanding Hindu Succession Law</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* What is Hindu Succession Law */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <ScrollText className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">What is Hindu Succession Law?</h3>
                <p className="text-gray-700">
                  Hindu Succession Law governs the inheritance and succession of property among Hindus, 
                  Buddhists, Jains, and Sikhs. It is primarily regulated by the Hindu Succession Act, 
                  1956, and its amendments.
                </p>
              </div>
            </div>
          </div>

          {/* Who is Covered */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Who is Covered?</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Hindus by religion</li>
                  <li>Buddhists, Jains, and Sikhs</li>
                  <li>Illegitimate children, adopted children, and children born after a parent's death (posthumous)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types of Succession */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Succession</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">A. Testate Succession (With a Will)</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>The property is distributed as per the wishes of the deceased</li>
                      <li>Must be legally valid (signed, witnessed, etc.)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">B. Intestate Succession (No Will)</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Property is distributed according to legal hierarchy defined in the Act</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Class Heirs */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Class Heirs under Hindu Succession Act</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Class I Heirs (receive the largest share)</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Son, daughter, widow, mother, etc.</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Class II Heirs (if no Class I heir)</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Father, brother, sister, etc.</li>
                    </ul>
                  </div>

                  <p className="text-gray-700">
                    Agnates and Cognates (distant relations) inherit if no Class I or II heirs exist.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rights of Women */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-rose-100 p-3 rounded-lg">
                <Scale className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rights of Women in Inheritance</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>The 2005 amendment gives daughters equal rights in ancestral property</li>
                  <li>Daughters become coparceners (equal partners) in joint family property</li>
                  <li>Widows can convert maintenance possession into full ownership (as per key rulings)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Supreme Court Judgment */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Gavel className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Supreme Court Judgment</h3>
                <div className="space-y-4">
                  <p className="font-medium text-gray-900">Case: Munni Devi v/s Rajendra (Lallu) Lal</p>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Issue:</p>
                    <p className="text-gray-700">Can a widow gain full ownership through maintenance-based possession?</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Ruling:</p>
                    <p className="text-gray-700">
                      Yes. Possession in lieu of a legal right like maintenance converts to full ownership 
                      under Section 14(1).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Confused about your rights under Hindu Succession Law?</h3>
            <p className="text-indigo-100 mb-6">
              Our experienced legal team can help you understand and protect your inheritance rights.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" onClick={onClose}>
                Talk to Our Experts
              </Button>
              <Button 
                variant="outlined" 
                onClick={onClose}
                className="border-white text-white hover:bg-white hover:text-indigo-900"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HinduSuccessionModal;