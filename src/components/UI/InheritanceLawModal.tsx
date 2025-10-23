import React from 'react';
import { X, Scroll, Scale, FileText, BookOpen, Clock } from 'lucide-react';
import Button from './Button';

interface InheritanceLawModalProps {
  onClose: () => void;
}

const InheritanceLawModal: React.FC<InheritanceLawModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-gray-900">Understanding Inheritance Law</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* What is Inheritance Law */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Scroll className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">What is Inheritance Law?</h3>
                <p className="text-gray-700">
                  Inheritance law governs how a person's assets, property, and debts are transferred after death. 
                  The process varies depending on whether the deceased left a will (testate) or not (intestate), 
                  and is subject to different regulations by country/state.
                </p>
              </div>
            </div>
          </div>

          {/* Testate Succession */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Testate Succession (With a Will)</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    A Will is a legal document that specifies how a person's assets should be distributed after death.
                  </p>
                  
                  <div className="pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Must be written</li>
                      <li>Signed by the testator</li>
                      <li>Witnessed according to legal requirements</li>
                    </ul>
                  </div>

                  <div className="pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Can Specify:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Beneficiaries</li>
                      <li>Guardians for minors</li>
                      <li>An Executor</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Executor's Duties:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Manage the estate</li>
                      <li>Pay debts and taxes</li>
                      <li>Distribute assets according to the will</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intestate Succession */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Intestate Succession (No Will)</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    When someone dies without a will, their assets are distributed according to state laws of intestate succession.
                  </p>

                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Typical Order of Succession:</h4>
                    <ol className="list-decimal pl-5 text-gray-700 space-y-1">
                      <li>Spouse</li>
                      <li>Children</li>
                      <li>Parents</li>
                      <li>Siblings</li>
                      <li>Extended Family</li>
                    </ol>
                  </div>

                  <div className="pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Points:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Spousal inheritance varies by jurisdiction</li>
                      <li>Children (biological/adopted) usually inherit equally</li>
                      <li>Stepchildren only inherit if adopted or named in a will</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Probate Process */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. The Probate Process</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    A court-supervised process to validate the will, inventory assets, pay debts, and distribute the estate.
                  </p>

                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Process Steps:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Validate the will (if it exists)</li>
                      <li>Inventory all assets</li>
                      <li>Pay debts and taxes</li>
                      <li>Distribute remaining estate</li>
                    </ul>
                  </div>

                  <div className="pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Tools to Avoid Probate:</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Living Trusts</li>
                      <li>Joint Ownership with Right of Survivorship</li>
                      <li>Payable-on-Death (POD) accounts</li>
                      <li>Transfer-on-Death (TOD) designations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need help with a will or inheritance issue?</h3>
            <p className="text-indigo-100 mb-6">
              Our experienced legal team is here to guide you through the process.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" onClick={onClose}>
                Schedule Free Consultation
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

export default InheritanceLawModal;