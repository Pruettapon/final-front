export default function Widget() {
  return (
    <div className="bg-white min-h-screen">
      {/* เพิ่มลิงก์ Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />

      {/* Navbar */}
      <header className="bg-yellow-500 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">LOWSEASON.COM</h1>
          <nav className="space-x-8 text-lg font-semibold">
            <a href="#" className="text-gray-800">Home</a>
            <a href="#" className="text-gray-800">About</a>
            <a href="#" className="text-gray-800">Blog</a>
            <a href="#" className="text-gray-800">Service</a>
            <a href="#" className="text-gray-800">Contact</a>
          </nav>
        </div>
      </header>
        
      {/* Section with buttons (Go, Went, Gone) */}
      <section className="text-center py-8">
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded font-semibold">Go</button>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded font-semibold">Went</button>
          <button className="bg-gray-300 text-gray-400 py-2 px-4 rounded font-semibold">Gone</button>
        </div>
      </section>

      {/* Search Section */}
      <section className="text-center py-6">
        <div className="relative inline-block w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-300 rounded-full px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button className="absolute right-3 top-2 text-yellow-500 text-xl">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </section>

      {/* Carousel or Featured Image Section */}
      <section className="relative w-full flex justify-center">
        <div className="relative w-3/4 h-[500px] overflow-hidden">
          <img
            src="https://placehold.co/800x400"
            alt="Scenic view"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold">3 วัน 2 คืน</h2>
            <p className="text-xl">เขาค้อ ภูทับเบิก</p>
            <p className="text-lg">12 พิกัดเที่ยว ชมหมอกสุดช่ำ</p>
          </div>
        </div>
      </section>

      {/* Highlight Section Divider */}
      <section className="py-12 flex flex-col items-center">
        {/* ไอคอนและเส้น */}
        <div className="flex items-center justify-center space-x-4 w-full">
          <span className="block border-t border-yellow-500 w-1/4"></span>
          <div className="flex flex-col items-center">
            {/* ใช้ไอคอนจาก Font Awesome */}
            <i className="fas fa-map-marker-alt fa-3x text-yellow-500"></i> {/* ไอคอนสำหรับ Highlight */}

            {/* ข้อความ 'Highlight' */}
            <h2 className="text-3xl font-bold text-center mt-2">
              <span className="text-black">High</span>
              <span className="text-yellow-500">light</span>
            </h2>
          </div>
          <span className="block border-t border-yellow-500 w-1/4"></span>
        </div>
      </section>

      {/* บทความที่มีรูปภาพ */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* บทความที่ 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/400/200"
                alt="บทความ 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">10/09/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                บทความไฮไลท์
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                เที่ยวน่าน 1 วัน เน้นในเมือง ลิ้มผัสวัฒนธรรมล้านนา
              </h3>
              <p className="text-gray-600">
                10 จุดเที่ยว กินในตัวเมือง เที่ยวได้ครบ...
              </p>
            </div>

            {/* บทความที่ 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/401/200"
                alt="บทความ 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">08/09/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                บทความไฮไลท์
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                เที่ยวฉะเชิงเทรา 1 วัน สายบุญ สายชิลล์ เที่ยวได้ครบ
              </h3>
              <p className="text-gray-600">
                วัด สถานที่เที่ยว และของอร่อยในวันเดียว...
              </p>
            </div>

            {/* บทความที่ 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/402/200"
                alt="บทความ 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">30/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                ท่องเที่ยว
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                9 ที่เที่ยวเชียงใหม่ หน้าฝน สวยกว่าเดิม
              </h3>
              <p className="text-gray-600">
                ชมความงามที่คุณไม่เคยเห็นมาก่อนที่เชียงใหม่...
              </p>
            </div>

            {/* บทความที่ 4 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/403/200"
                alt="บทความ 4"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">28/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                บทความไฮไลท์
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                เที่ยวเขาค้อ ภูทับเบิก ปักหมุด 12 พิกัดหน้าฝน
              </h3>
              <p className="text-gray-600">
                เที่ยวชมหมอกที่ภูทับเบิกแบบเต็มวัน...
              </p>
            </div>

            {/* บทความที่ 5 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/404/200"
                alt="บทความ 5"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">22/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                ท่องเที่ยว
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                สำรวจเกาะสมุยใน 3 วัน 2 คืน กับการเดินทางที่ไม่เหมือนใคร
              </h3>
              <p className="text-gray-600">
                การผจญภัยใหม่ที่คุณจะหลงรัก...
              </p>
            </div>

            {/* บทความที่ 6 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/405/200"
                alt="บทความ 6"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">18/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                บทความไฮไลท์
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                พักผ่อนบนหาดทรายขาวในพัทยา
              </h3>
              <p className="text-gray-600">
                แนะนำสถานที่ท่องเที่ยวและที่พักที่ต้องไป...
              </p>
            </div>

            {/* บทความที่ 7 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/406/200"
                alt="บทความ 7"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">12/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                ท่องเที่ยว
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                เดินเที่ยวชมเมืองเก่าที่ภูเก็ตdddddddddddddd
              </h3>
              <p className="text-gray-600">
                เรื่องราวที่ไม่เคยรู้มาก่อนเกี่ยวกับเมืองภูเก็ตddddddddddddddddd...
              </p>
            </div>

            {/* บทความที่ 8 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/407/200"
                alt="บทความ 8"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">10/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                บทความไฮไลท์
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ประสบการณ์ใหม่ที่เชียงราย
              </h3>
              <p className="text-gray-600">
                ท่องเที่ยวไปในธรรมชาติและสถานที่สวยงามในเชียงราย...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วน คาเฟ่/ร้านอาหาร */}
      <section className="py-12 flex flex-col items-center">
        {/* ไอคอนและเส้น */}
        <div className="flex items-center justify-center space-x-4 w-full">
          <span className="block border-t border-yellow-500 w-1/4"></span>
          <div className="flex flex-col items-center">
            {/* ใช้ไอคอนจาก Font Awesome */}
            <i className="fas fa-utensils fa-3x text-yellow-500"></i> {/* ไอคอนสำหรับร้านอาหาร */}

            {/* ข้อความ 'คาเฟ่/ร้านอาหาร' */}
            <h2 className="text-3xl font-bold text-center mt-2">
              <span className="text-black">คาเฟ่</span>
              <span className="text-yellow-500">ร้านอาหาร</span>
            </h2>
          </div>
          <span className="block border-t border-yellow-500 w-1/4"></span>
        </div>
      </section>
      <section className="py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* บทความที่ 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/400/200"
                alt="บทความ 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">03/09/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                คาเฟ่ ร้านอาหาร
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Cedar ป่าสน cafe’at เขาค้อ จิบเครื่องดื่ม ท่ามกลางป่าสน
              </h3>
            </div>

            {/* บทความที่ 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/401/200"
                alt="บทความ 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">26/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                คาเฟ่ ร้านอาหาร
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                The Dreamer Café เขาค้อ คาเฟ่ ใกล้วัดผาซ่อนแก้ว วิวภูเขาสุดฟิน
              </h3>
            </div>

            {/* บทความที่ 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/402/200"
                alt="บทความ 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">24/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                คาเฟ่ ร้านอาหาร
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                ม่อนซ่อนแก้ว เขาค้อ ชิมกาแฟ วิวปัง ชงโดยบาริสต้าวัยเก๋า
              </h3>
            </div>

            {/* บทความที่ 4 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src="https://placekitten.com/403/200"
                alt="บทความ 4"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-500">16/08/2024</p>
              <span className="inline-block bg-yellow-500 text-white py-1 px-2 rounded-full text-sm font-semibold mb-2">
                คาเฟ่ ร้านอาหาร
              </span>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                15 คาเฟ่ฉะเชิงเทรา ไปนั่งชิลริมน้ำ ถ่ายรูปเก๋ ไม่มีเอ้าท์
              </h3>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-yellow-500 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ข้อความส่วนกลาง */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">ไปด้วยกัน เว็บไซต์รวบรวมข้อมูลท่องเที่ยว คาเฟ่ ร้านอาหาร ที่พัก</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#"><i className="fab fa-facebook text-3xl text-white"></i></a>
              <a href="#"><i className="fab fa-tiktok text-3xl text-white"></i></a>
              <a href="#"><i className="fab fa-instagram text-3xl text-white"></i></a>
              <a href="#"><i className="fab fa-twitter text-3xl text-white"></i></a>
              <a href="#"><i className="fab fa-youtube text-3xl text-white"></i></a>
            </div>
          </div>

          {/* เมนูลิงก์ */}
          <div className="text-center md:text-left">
            <ul className="space-y-2">
              <li><a href="#" className="text-white">หน้าแรก</a></li>
              <li><a href="#" className="text-white">ข้อมูลท่องเที่ยวจังหวัด</a></li>
              <li><a href="#" className="text-white">ท่องเที่ยว</a></li>
              <li><a href="#" className="text-white">คาเฟ่ ร้านอาหาร</a></li>
              <li><a href="#" className="text-white">ที่พักทั่วไทย</a></li>
              <li><a href="#" className="text-white">วิดีโอท่องเที่ยว</a></li>
            </ul>
          </div>

          {/* ข้อมูลติดต่อ */}
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">ติดต่อโฆษณา :</h3>
            <p className="text-white mb-4"><i className="fas fa-envelope"></i> E-mail: paiduaykan.com@gmail.com</p>
            <button className="bg-white text-yellow-500 py-2 px-4 rounded">ขอรายละเอียดโฆษณา คลิก</button>
            <p className="text-white mt-4">ใบอนุญาตประกอบธุรกิจนำเที่ยวเลขที่ 14/04443</p>
          </div>
        </div>

        {/* ส่วนลิขสิทธิ์ */}
        <div className="border-t border-yellow-600 mt-8 pt-4 text-center text-white">
          <p>Copyright © 2010-2024</p>
          <p>โหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ยโหลยโท่ย</p>
        </div>
      </footer>

    </div>

  );
}