<nav class="nav navbar fixed-top navbar-expand-xxl navbar-light bg-light" role="navigation">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse vertical-nav px-3 py-5" id="navbarToggler">
            <ul class="navbar-nav navbar-nav-scroll me-auto mb-2 mb-lg-0 flex-column">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#ivadas"><strong>Atstovavimo gidas</strong></a>
                </li>
                <div class="dropdown-divider"></div>
                <li class="navbar-text">
                    <a style="font-size:1.2em" class="nav-link"><strong>I dalis</strong></a>
                  </li>
                @include('elements.nav.AM')
                @include('elements.nav.Seimas')
                @include('elements.nav.LRV')
                @include('elements.nav.SMSM')
                @include('elements.nav.VyriausybesNutarimai')
                <div class="dropdown-divider"></div>
                <li class="navbar-text">
                    <a style="font-size:1.2em" class="nav-link"><strong>II dalis</strong></a>
                  </li>
                @include('elements.nav.atstovuKompetencijos')
            </ul>
        </div>
    </div>
</nav>
