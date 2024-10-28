<template>
  <div class="js-wrapper">
    <h1 class="js-title">JavaScript - wprowadzenie</h1>
    <div class="js-content">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-text">
              <div class="content-title">Do czego używamy JavaScript</div>
              JavaScript jest popularnym językiem <b>programowania</b>, który
              służy do tworzenia dynamicznych stron internetowych.<br />
              Jest jednym z podstawowych języków używanych w <b>frontendzie</b>,
              ale także ma szerokie zastosowanie w backendzie przy użyciu
              <b>Node.js</b>.<br />
              Aby zacząć korzystać z JavaScript, potrzebujesz przeglądarki lub
              środowiska, takiego jak Node.js, które interpretuje kod JS.<br />
              Nie musisz instalować żadnych kompilatorów, ponieważ JavaScript
              działa w przeglądarkach, takich jak Chrome czy Firefox.
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Cechy języka</div>
              <ul>
                <li>Dynamicznie typowany</li>
                <li>Wspiera programowanie obiektowe</li>
                <li>Asynchroniczne operacje</li>
                <li>Ścisła integracja z HTML i CSS</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">
                Wypiswanie danych w konsoli przeglądarki
              </div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">console.log</span>(
                  <span class="text-success">"<input @focus="showResult=false" type="text" class="console-log text-success" placeholder="Hello World" v-model="logValue">"</span>
                  ); 
                  //Kliknij w napis "Hello World", aby zmienić treść komunikatu
                  //Komunikat ten wyświetli się w konsoli jednak na potrzeby tego kursu my wypiszemy go nizej
              </pre>
              </div>
              <button class="run" @click="runCode">Uruchom</button>
              <div class="show-result" v-if="showResult">{{ logValue }}</div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- wprowadzanie danych -->
            <div class="content-text">
              <div class="content-title">Wprowadzanie danych</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> name = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"<input @focus="showResult=false" type="text" class="console-log text-success" placeholder="Podaj swoje imię" v-model="name">"</span>
                  );
                  <span class="text-success">alert</span>(
                  <span class="text-success">"Witaj, "</span> + name
                  );
                  //Kliknij w napis "Podaj swoje imię", aby wprowadzić swoje imię
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCode">Uruchom</button>
              <div class="show-result" v-if="showResult">
                {{ "Witaj," + name }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Instrukcje warunkowe -->
            <div class="content-text">
              <div class="content-title">Instrukcje warunkowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> age = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"<input @focus="showResult=false" type="text" class="console-log text-success" placeholder="Podaj swój wiek" v-model="age">"</span>
                  );
                  <span class="text-success">if</span> (age >= 18) {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Jesteś pełnoletni"</span>
                    );
                  } <span class="text-success">else</span> {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Nie jesteś pełnoletni"</span>
                    );
                  }
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCode">Uruchom</button>
              <div class="show-result" v-if="showResult">
                {{ age >= 18 ? "Jesteś pełnoletni" : "Nie jesteś pełnoletni" }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Operatory logiczne w instrukcjach warunkowych jak dzialaja-->
            <div class="content-text">
              <div class="content-title">Operatory logiczne</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> age = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"<input @focus="showResult=false" type="text" class="console-log text-success" placeholder="Podaj swój wiek" v-model="age">"</span>
                  );
                  <span class="text-success">if</span> (age >= 18 && age <= 65) { //&& oznacza i oba warunku musza byc spelniowe
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Jesteś w wieku produkcyjnym"</span>
                    );
                  } <span class="text-success">else</span> {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Nie jesteś w wieku produkcyjnym"</span>
                    );
                  }
                  //Istneije jeszce operator || oznaczajacy lub oznacza ze jeden warunek musi zostac spełniony
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCode">Uruchom</button>
              <div class="show-result" v-if="showResult">
                {{
                  age >= 18 && age <= 65
                    ? "Jesteś w wieku produkcyjnym"
                    : "Nie jesteś w wieku produkcyjnym"
                }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          @click="showResult = false"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          @click="showResult = false"
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

<script lang="ts" setup>
import { ref } from "vue";
const showResult = ref(false);
let logValue = ref("Hello World");
let returnText = ref("Tutaj wyświetli się wynik");
let name = ref("Podaj swoje imię");
let age = ref();
const runCode = () => {
  returnText.value = "Uruchamianie...";
  setTimeout(() => {
    returnText.value = "Tutaj wyświetli się wynik";
    showResult.value = true;
  }, 1000);
  console.log("Kod uruchomiony");
};
</script>

<style>
pre {
  text-align: left;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  padding: 0;
  filter: invert(1); /* Zmienia kolor ikon na czarny */
}
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
}
.carousel-control-prev,
.carousel-control-next {
  position: absolute !important;
}
.carousel-control-prev {
  left: -15%;
}
.carousel-control-next {
  right: -15%;
}
.js-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.js-title {
  font-size: 50px;
  color: #2c3e50;
}
.js-content {
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
.console-log {
  background-color: transparent;
  border: 0;
}
</style>
