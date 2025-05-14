import { useNavigate } from "react-router-dom";

export default function Error401() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center h-screen bg-green-500">
      <div className="bg-white rounded-[14px] h-[650px] w-[735px] mt-2 shadow-lg">
        <div className="px-10 space-y-6">
    
          <div className="flex items-center justify-center mt-20">
            <img
              src="https://betterdocs.co/wp-content/uploads/2023/03/image.png" 
              alt="Error 401"
              className="w-150 h-70"
            />
          </div>

       
          <div className="flex justify-center items-center flex-col p-10">
            <p className="text-[24px] font-bold text-gray-700">
             Sorry Unauthtorize Account...
            </p>
          </div>

        
          <div>
            <button
              onClick={handleLogin}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
