<div class="mermaid">
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffffff', 'primaryBorderColor': '#0000025', 'edgeLabelBackground':'#ffffee', 'secondaryTextColor': '#bd2835' , 'tertiaryColor': '#fbb01b0f', 'tertiaryTextColor': '#333', 'fontFamily': 'arial'}}}%%

    flowchart BT
    sag[Savivaldybės gyventojai] -- Renka --> meras[Meras]
    sag -- Renka --> sat[Savivaldybės taryba]

    subgraph sav[ ]
    meras-- Teikia --> sad[Savivaldybės administracijos direktorius]
    sad -- Formuoja --> saa[Savivaldybės administracija]
    saa -- Deleguoja 50 % --> sajrt[Savivaldybės jaunimo reikalų taryba]
    sajrt -- Teikia rekomendacijas --> sat
    sat -- Patvirtina --> sad
    sajrt <-. Bendradarbiauja .-> jrk[Jaunimo reikalų koordinatorius]
    end

    subgraph ja[ ]
    jo[Jaunimo organizacijos] 
    sjdo[Su jaunimu dirbančios organizacijos] 
    ms[Mokinių savivaldos] 
    sa[Studentų atstovybės]
    end
        
    jrk -- Atsakingas už visuotinį susirinkimą, sekretoriauja --> ja
    ja -- Deleguoja 50 % --> sajrt

    click sag call callback() "Tooltip for a callback"

    style sag fill:#bd2835bb,stroke:#333,stroke-width:4px,color:#ffffff
</div>