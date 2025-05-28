import React from 'react';
import { Layout } from '../components/Layout';

const LessonPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Lesson Title</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <p className="text-gray-600">
                Lesson content will be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LessonPage;