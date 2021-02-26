<div class="mermaid">
    %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ffcccc', 'edgeLabelBackground':'#ffffee', 'tertiaryColor': '#fff0f0', 'fontFamily': 'arial'}}}%%
    flowchart TB
    sag[Savivaldybės gyventojai] -- Renka --> meras[Meras]
    subgraph Savivaldybė
    meras-- Teikia --> sad[Savivaldybės administracijos direktorius]
    sad -- Formuoja --> saa[Savivaldybės administracija]
    saa -- Deleguoja 50 % --> sajrt[Savivaldybės jaunimo reikalų taryba]
    sajrt -- Teikia rekomendacijas --> sat[Savivaldybės taryba]
    sag -- Renka --> sat
    sat -- Patvirtina --> sad
    sajrt <-- Bendradarbiauja --> jrk[Jaunimo reikalų koordinatorius]
    end
    subgraph Jaunimo organizacijos        
    jrk -- Atsakingas už visuotinį susirinkimą, sekretoriauja --> jo[Jaunimo organizacijos, su jaunimu dirbančios organizacijos, mokinių savivaldos, studentų atstovybės]
    jo -- Deleguoja 50 % --> sajrt
    end
</div>