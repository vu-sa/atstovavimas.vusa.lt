<nav class="nav navbar fixed-top navbar-expand-xxl navbar-light bg-light" role="navigation">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse vertical-nav px-3 py-3" id="navbarToggler">
            <ul class="navbar-nav navbar-nav-scroll me-auto mb-2 mb-lg-0 flex-column">
                <li class="navbar-text">
                    <a class="nav-link" style="font-size: 1.2em" aria-current="page" href="#ivadas"><img src="img/vusa.png" width="50" style="padding-right:15px;margin:0"><strong>Atstovavimo gidas</strong></a>
                </li>
                <div class="dropdown-divider"></div>
                <li class="navbar-text">
                    <a style="font-size:1em" class="nav-link"><strong>I dalis</strong></a>
                  </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#KAP">Kamieninis akademinis padalinys</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#VU">Vilniaus universitetas</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#miestas">Miestas</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#aukstasis-mokslas">Aukštasis mokslas</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#vyriausybe">Vyriausybė</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#smsm">ŠMSM</a>
                </li>
                <li class="navbar-link">
                    <a class="nav-link" aria-current="page" href="#procesai">Įstatymų leidyba</a>
                </li>
                <div class="dropdown-divider"></div>
                @include('elements.nav.schemos')
                {{-- @include('elements.nav.AM')
                @include('elements.nav.Seimas')
                @include('elements.nav.LRV')
                @include('elements.nav.SMSM')
                @include('elements.nav.procesai') --}}
                <div class="dropdown-divider"></div>

                <li class="navbar-text">
                    <a style="font-size:1em" class="nav-link"><strong>II dalis</strong></a>
                  </li>
                @include('elements.nav.SAO')
                @include('elements.nav.atstovuKompetencijos')
                  
                <div class="dropdown-divider"></div>
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="#baigiamasis-zodis"><strong>Baigiamasis žodis</strong></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
