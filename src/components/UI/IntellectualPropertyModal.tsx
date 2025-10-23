import React from 'react';
import { X, Lightbulb, FileText, Scale, TrendingUp } from 'lucide-react';
import Button from './Button';

interface IntellectualPropertyModalProps {
  onClose: () => void;
}

const IntellectualPropertyModal: React.FC<IntellectualPropertyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b z-10">
          <div className="flex justify-between items-center p-6">
            <h2 className="text-2xl font-bold text-gray-900">Understanding Intellectual Property Law</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* What is IP Law */}
          <div className="bg-indigo-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Lightbulb className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">What is Intellectual Property Law?</h3>
                <p className="text-gray-700">
                  Intellectual Property law protects creations of the mind such as inventions, artistic works, 
                  brand names, and designs. It grants exclusive rights to creators and innovators to encourage 
                  innovation and protect economic value.
                </p>
              </div>
            </div>
          </div>

          {/* Types of IP */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Intellectual Property</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">A. Copyrights</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Protects original literary, artistic, and musical works</li>
                      <li>Includes books, software code, songs, movies, etc.</li>
                      <li>Automatic protection upon creation (in most jurisdictions)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">B. Trademarks</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Protects brand names, logos, slogans, etc.</li>
                      <li>Used to distinguish goods or services</li>
                      <li>Requires registration in most countries for full legal rights</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">C. Patents</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Grants exclusive rights to inventors for new inventions</li>
                      <li>Valid for 20 years (typically)</li>
                      <li>Requires detailed application and examination</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">D. Trade Secrets</h4>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Protects confidential business information</li>
                      <li>No registration required; depends on secrecy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IP Protection */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Importance of IP Protection</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Encourages innovation and creativity</li>
                  <li>Safeguards business reputation and assets</li>
                  <li>Prevents unauthorized use or copying</li>
                  <li>Adds value to business portfolios and helps in licensing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IP Management */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IP Registration & Management Process</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">Key steps in managing intellectual property:</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Conduct IP search (to avoid conflicts)</li>
                    <li>File appropriate application (e.g., with Patent Office or Trademark Registry)</li>
                    <li>Monitor and renew IP rights</li>
                    <li>Consider IP audits for startups and businesses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-indigo-900 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need help protecting your ideas?</h3>
            <p className="text-indigo-100 mb-6">
              Our experienced IP lawyers can help you secure and defend your intellectual property rights.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="secondary" onClick={onClose}>
                Book IP Consultation
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

export default IntellectualPropertyModal;