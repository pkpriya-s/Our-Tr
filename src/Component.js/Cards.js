function Cards() {
  return (
    <div className="parent">
      {/* location simble */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-geo-alt-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
      </svg>
      {/* Google Map Location */}
      <a href="https://www.google.com/maps/place/Dawki,+Meghalaya+793109/@25.1849368,92.0124292,15z/data=!3m1!4b1!4m6!3m5!1s0x3750437c783076c9:0x9cbdcc37938437e4!8m2!3d25.1840249!4d92.0248701!16s%2Fm%2F05p0gk1?authuser=0&entry=ttu">
        Dawki Waterfall
      </a>
      {/* image code */}
      <section className="section">
        <div className="image">
          <img src="./images/img.jpg" height={300} width={450} />
        </div>
        <span className="text">
          <h1>Dawki Waterfalls,Meghalaya </h1>
          <h3>APRIL 15</h3>
          <p>
            a river which flows through Dawki, a small town located at the
            bottom of the Jaintia Hills in West Jaintia Hills district in the
            Indian state of Meghalaya.<br></br>
          </p>
        </span>
      </section>
      <id className="parent2">
        {/* location simbel */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
        <a href="https://www.google.com/maps/place/Fira+847+00,+Greece/@36.4203431,25.4218707,15z/data=!3m1!4b1!4m6!3m5!1s0x1499cdce05e3bce9:0x9f4c192bbefa1db!8m2!3d36.4166485!4d25.432447!16zL20vMDd3enF6?authuser=0&entry=ttu">
          Santorini Greece 
        </a>
        {/* image code */}
        <section className="section">
          <div className="image">
            <img src="./images/img1.jpg" height={300} width={450} />
          </div>
          <span className="text">
            <h1>Santorini Greece </h1>
            <h3>MAY 03</h3>
            <p>
            Santorini is one of the Cyclades islands in the Aegean Sea. <br></br>It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape.
            </p>
          </span>
        </section>
      </id>

      <div className="parent3">
          {/* location simbel */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-geo-alt-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
        <a href="https://www.google.com/maps/place/Waitomo+Glowworm+Caves/@-38.2608199,175.1009538,17z/data=!3m1!4b1!4m6!3m5!1s0x6d6cb77ef3e3547d:0x922cb1e1fd309ff2!8m2!3d-38.2607014!4d175.1036062!16s%2Fm%2F026vvg7?authuser=0&entry=ttu">
        Firefly Cave,Zealand
        </a>
        {/* image code */}
        <section className="section">
          <div className="image">
            <img src="./images/img2.jpg" height={300} width={450} />
          </div>
          <span className="text">
            <h1> Firefly Cave</h1>
            <h3>JANUARY 25</h3>
            <p>
            There are certain places in the world that can actually make us feel out of the world.<br></br> And the Glow Worm Caves in Waitomo, New Zealand is probably one of the best examples of it. <br></br>In the darkest corners of the caves, dwell little mesmerising creatures, that glow in luminescent blue
            </p>
          </span>
        </section>
      </div>
    </div>
  );
}

export default Cards;
