export default function RestaurantDescription() {
  return (
    <section className="snap-start pt-20 pb-12 bg-[#FDF6E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <svg
            width="26"
            height="26"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-80"
          >
            <path
              d="M11 0L13.2775 3.99071L17.4656 2.10081L16.9625 6.66802L21.4616 7.60081L18.37 11L21.4616 14.3992L16.9625 15.332L17.4656 19.8992L13.2775 18.0093L11 22L8.72256 18.0093L4.53437 19.8992L5.03756 15.332L0.538391 14.3992L3.63001 11L0.538391 7.60081L5.03756 6.66802L4.53437 2.10081L8.72256 3.99071L11 0Z"
              fill="#4A2511"
            />
          </svg>
        </div>
        <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto text-[#4A2511]">
          Une fusion unique de saveurs, où l'Éthiopie rencontre l'Italie et la
          France pour une expérience gustative multiculturelle inoubliable, avec
          des options vegan, sans gluten et sans lactose pour tous.
        </p>
      </div>
    </section>
  );
}
