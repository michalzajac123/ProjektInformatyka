<template>
  <div class="cpp-wrapper">
    <h1 class="cpp-title">C++ - wprowadzenie</h1>
    <div class="cpp-content">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-text">
              <div class="content-title">Do czego uzywamy c++</div>
              C++ jest popularnym językiem <b>programowania.</b> Służy do
              tworzenia programów komputerowych i jest jednym z najczęściej
              używanych języków programowania w tworzeniu gier.<br />
              Jest on rozszerzeniem języka C , a oba języki mają niemal
              identyczną
              <b>składnię</b>.<br />
              Aby zacząć używać języka C++, potrzebne Ci są dwie rzeczy: Edytor
              tekstu, taki jak Notatnik, do pisania kodu C++
              <b>Kompilator</b>,taki jak GCC, który tłumaczy kod C++ na język
              zrozumiały dla komputera<br />
              Istnieje wiele edytorów tekstu i kompilatorów do wyboru. My w tym
              kursie polecamy <b>CodeBlocks</b>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Cechy języka</div>
              <ul>
                <li>Zorientowany obiektowo</li>
                <li>Statycznie typowany</li>
                <li>Kompatybilność</li>
                <li>Wspiera programowanie proceduralne</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              C++ jest popularnym językiem <b>programowania.</b> Służy do
              tworzenia programów komputerowych i jest jednym z najczęściej
              używanych języków programowania w tworzeniu gier.<br />
              Jest on rozszerzeniem języka C , a oba języki mają niemal
              identyczną
              <b>składnię</b>.<br />
              Aby zacząć używać języka C++, potrzebne Ci są dwie rzeczy: Edytor
              tekstu, taki jak Notatnik, do pisania kodu C++
              <b>Kompilator</b>,taki jak GCC, który tłumaczy kod C++ na język
              zrozumiały dla komputera<br />
              Istnieje wiele edytorów tekstu i kompilatorów do wyboru. My w tym
              kursie polecamy <b>CodeBlocks</b>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script></script>
<style>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  padding: 0;
  filter: invert(1); /* Zmienia kolor ikon na czarny */
}
.carousel {
  display: flex;
  justify-content: center;
}
.cpp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cpp-title {
  font-size: 50px;
  color: #2c3e50;
}
.cpp-content {
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.content-title {
  font-size: 30px;
  color: #2c3e50;
}
li {
  list-style-type: none;
}
</style>
