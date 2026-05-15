import React, { useState, useEffect } from 'react';

// Using actual files from public/gallery directory
const galleryData = {
  '2025': [
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.51_PM-8afb1ec3-db7c-474c-834c-686523910c28.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.52_PM-c1729b8c-df79-4bc7-b8ab-06c879d71c89.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.53_PM-4e207914-f58d-4f16-9213-91122a27ef93.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.54_PM-9f939e6a-2253-4315-bd35-fb5b5ec1e6aa.png',
  ],
  '2024': [
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.55_PM-a0265739-1fb6-4fdd-9e9f-f285356a4a8a.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.56_PM-dfa105c3-b097-4b71-b0db-6e1c2e6f43e5.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.57_PM-72d935e4-2dc6-48cd-96dc-f076b1fb3a24.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.58_PM-bbdf5926-bdca-4db4-b258-37a544c4146a.png',
  ],
  '2023': [
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.53.59_PM-76ed9e02-0f42-41d2-960a-6a26c3859156.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.01_PM-8f273295-a226-4448-a006-a94f1ff6058b.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.02_PM-b8bb9b2e-9d22-4a0b-93df-ff19e34eec31.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.03_PM-4e207914-f58d-4f16-9213-91122a27ef93.png',
  ],
  '2022': [
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.08_PM-bab885d7-4e46-4931-8529-0299883a289a.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.16_PM-2f911b84-3a6f-4f7c-b931-1a9539981f26.png',
    '/gallery/c__Users_wayne_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_WhatsApp_Image_2026-05-14_at_4.54.27_PM-b7ae279e-1131-46a1-a6f4-8e9fd1d46f4d.png',
  ]
};

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const tabs = ['All', '2025', '2024', '2023', '2022'];

  useEffect(() => {
    setIsLoaded(false);
    setTimeout(() => {
      if (activeTab === 'All') {
        const allImages = Object.values(galleryData).flat();
        setImages(allImages);
      } else {
        setImages(galleryData[activeTab] || []);
      }
      setIsLoaded(true);
    }, 300); // simulate loading animation
  }, [activeTab]);

  return (
    <div className="bg-offwhite min-h-screen pt-32 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        <div className="mb-12">
          <h1 className="font-display text-[48px] font-bold text-navy mb-2">Gallery</h1>
          <p className="font-body text-[16px] text-gray-500">Moments from our past forums.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-body text-[14px] font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-green text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-green/10 border border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-3xl group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${index % 5 === 0 ? 'sm:col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
            >
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={img} 
                alt={`GSEF Gallery ${index}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <span className="text-white font-display font-semibold text-lg drop-shadow-md">GSEF Forum</span>
              </div>
            </div>
          ))}
        </div>

        {images.length > 0 && (
          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-gray-200 text-navy font-body font-semibold px-8 py-3 rounded-full hover:border-green hover:text-green transition-colors shadow-sm">
              Load More
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Gallery;
