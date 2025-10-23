import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import Button from '../components/UI/Button';
import { ArrowLeft, Scale, FileText, Gavel, AlertTriangle } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(cs => cs.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h2>
          <Link to="/case-studies">
            <Button variant="outlined">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderMunniDeviCase = () => (
    <div className="space-y-8">
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
        <div className="flex items-start">
          <Scale className="w-6 h-6 text-indigo-600 mr-4 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-indigo-900 mb-2">Issue</h2>
            <p className="text-gray-700">
              Whether a Hindu widow's settled possession of property in lieu of her right to maintenance 
              can be converted into full ownership under Section 14(1) of the Hindu Succession Act, 1956.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-start">
          <FileText className="w-6 h-6 text-gray-700 mr-4 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Facts of the Case</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Bhonri Devi, a Hindu widow, was living on and managing property left by her deceased husband.</li>
              <li>The dispute arose when her possession was challenged by the heirs of her husband's family 
                (Munni Devi's side), who claimed she had only a limited right for maintenance—not ownership.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
        <div className="flex items-start">
          <Gavel className="w-6 h-6 text-green-600 mr-4 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-green-900 mb-4">Supreme Court Ruling</h2>
            <p className="text-gray-700 mb-4">
              The Court ruled in favor of Bhonri Devi (represented by Rajendra's heirs), stating:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>Her pre-existing right to maintenance, along with settled possession, entitled her to 
                full ownership under Section 14(1).</li>
              <li>A woman does not need formal title if her possession is in recognition of a legal right.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-amber-600 mr-4 mt-1" />
          <div>
            <h2 className="text-xl font-bold text-amber-900 mb-4">Key Implications</h2>
            <ul className="space-y-3 text-gray-700">
              <li>Strengthens the position of Hindu widows in property disputes</li>
              <li>Clarifies the scope of Section 14(1) of the Hindu Succession Act</li>
              <li>Establishes that possession with legal right can lead to full ownership</li>
              <li>Protects women's property rights even without formal documentation</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link to="/case-studies">
          <Button variant="outlined">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Button>
        </Link>
      </div>
    </div>
  );

  const renderJaiNarainCase = () => (
    <>
      <div className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-bold mb-6">Overview</h2>
        <p>
          The Supreme Court addressed whether a daughter could inherit her father's self-acquired property 
          if he died before the Hindu Succession Act of 1956.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-6">Background</h2>
        <p>
          Marappa Gounder died intestate in 1938, and his daughter Kupayee Ammal inherited the property. 
          This inheritance was later challenged by collateral relatives, leading to a significant legal battle 
          that addressed fundamental questions about women's inheritance rights.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-6">Key Challenges</h2>
        <ul>
          <li>Interpretation of pre-1956 Hindu law regarding inheritance</li>
          <li>Historical bias favoring male succession</li>
          <li>Application of modern law to historical inheritance cases</li>
          <li>Rights of daughters in self-acquired property</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-6">Legal Analysis</h2>
        <p>
          The Court examined several critical aspects:
        </p>
        <ul>
          <li>Traditional Hindu law principles regarding inheritance</li>
          <li>Evolution of property rights for women</li>
          <li>Distinction between ancestral and self-acquired property</li>
          <li>Impact of the Hindu Succession Act on previous cases</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-6">Verdict and Implications</h2>
        <p>
          The Court ruled in favor of the daughter's heirs, establishing that:
        </p>
        <ul>
          <li>Daughters can inherit self-acquired property even under traditional Hindu law</li>
          <li>The right exists independent of the Hindu Succession Act</li>
          <li>Gender-based discrimination in inheritance is unconstitutional</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-6">Significance</h2>
        <p>
          This landmark judgment strengthens women's inheritance rights by:
        </p>
        <ul>
          <li>Clarifying historical rights under Hindu law</li>
          <li>Establishing precedent for similar cases</li>
          <li>Promoting gender equality in property rights</li>
          <li>Providing legal basis for challenging discriminatory practices</li>
        </ul>
      </div>
    </>
  );

  return (
    <div>
      <section className="relative py-24 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/case-studies"
            className="inline-flex items-center text-indigo-100 hover:text-white mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>
          <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
          <div className="flex items-center gap-4">
            <span className="bg-indigo-800 text-white px-3 py-1 rounded-full text-sm">
              {caseStudy.category}
            </span>
            <span className="text-indigo-100">{caseStudy.clientType}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            {caseStudy.id === 'cs1' && renderMunniDeviCase()}
            {caseStudy.id === 'cs2' && renderJaiNarainCase()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;