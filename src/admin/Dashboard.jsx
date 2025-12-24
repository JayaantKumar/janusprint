import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { auth, storage, db } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);

  const handleLogout = () => {
    signOut(auth);
    navigate('/admin/login');
  };

  const handleUpload = async (file, collectionName, isSingleDoc = false) => {
    if (!file) return;
    setUploading(true);
    try {
      // 1. Upload to Storage
      const storageRef = ref(storage, `${collectionName}/${Date.now()}_${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      // 2. Save URL to Firestore
      if (isSingleDoc) {
        // For Hero video, we only want one document
        await setDoc(doc(db, "sections", "hero"), { url });
      } else {
        await addDoc(collection(db, collectionName), { url, createdAt: Date.now() });
      }
      alert("Uploaded Successfully!");
    } catch (error) {
      console.error(error);
      alert("Error uploading");
    }
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Video Uploader */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Hero Video (Single)</h2>
          <input type="file" accept="video/mp4" onChange={(e) => handleUpload(e.target.files[0], "hero", true)} />
          {uploading && <p className="text-blue-500 mt-2">Uploading...</p>}
        </div>

        {/* Rotating Circle Images */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Rotating Circle Images</h2>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e.target.files[0], "rotating_images")} />
        </div>

        {/* Marquee Images */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Marquee Images</h2>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e.target.files[0], "marquee_items")} />
        </div>

        {/* Fan Section Images */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Fan Section Images (Upload 4)</h2>
          <input type="file" accept="image/*" onChange={(e) => handleUpload(e.target.files[0], "fan_images")} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;