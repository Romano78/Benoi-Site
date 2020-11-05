import React from "react"
import PropTypes from "prop-types"
import ProjetLayout from "../components/Pages/projet"
import { graphql } from "gatsby"

export const query = graphql`
  {
    projet: prismicHomepage {
      data {
        group_links {
          page_link {
            document {
              ... on PrismicPage1 {
                data {
                  derniere_phrase
                  phrase_importante {
                    text
                  }
                  text {
                    html
                  }
                  titre {
                    text
                  }
                }
              }
              ... on PrismicPage2 {
                data {
                  prenom_1
                  prenom_2
                  titre {
                    text
                  }
                }
              }
              ... on PrismicPage3 {
                id
                data {
                  contenu {
                    html
                  }
                  graphic {
                    localFile {
                      url
                    }
                  }
                  titre {
                    text
                  }
                }
              }
              ... on PrismicPage4 {
                id
                data {
                  contenu {
                    html
                  }
                  graphs {
                    graph {
                      localFile {
                        url
                      }
                    }
                  }
                }
              }
              ... on PrismicPage5 {
                data {
                  contenu {
                    html
                  }
                  graphic {
                    localFile {
                      url
                    }
                  }
                }
              }
              ... on PrismicPage6 {
                data {
                  chiffre_1
                  chiffre_2
                  chiffre_description
                  liens
                  pay
                  ville
                  text {
                    html
                  }
                  grand_graph {
                    localFile {
                      url
                    }
                  }
                  petit_graph {
                    localFile {
                      url
                    }
                  }
                }
              }
              ... on PrismicPage7 {
                data {
                  text {
                    html
                  }
                  ville
                  pay
                  pourcentage_quebec
                  pourcentage_canada
                  graphic_canada {
                    localFile {
                      url
                    }
                  }
                  graphic_quebec {
                    localFile {
                      id
                    }
                    url
                  }
                }
              }
              ... on PrismicPage8 {
                data {
                  graph {
                    localFile {
                      url
                    }
                  }
                  option {
                    point
                  }
                  information
                }
              }
              ... on PrismicPage9 {
                data {
                  contenu {
                    html
                  }
                  graphic {
                    localFile {
                      url
                    }
                  }
                  pay
                  revenu_quebec
                  revenue_canada
                  titre {
                    text
                  }
                  ville
                }
              }
              ... on PrismicPage10 {
                data {
                  graphic {
                    localFile {
                      url
                    }
                  }
                  titre {
                    text
                  }
                  content {
                    html
                  }
                  phrase
                }
              }

              ... on PrismicPage11 {
                data {
                  graph_1 {
                    localFile {
                      url
                    }
                  }
                  graph_2 {
                    localFile {
                      url
                    }
                  }
                  graph_3 {
                    localFile {
                      url
                    }
                  }
                  graph_4 {
                    localFile {
                      url
                    }
                  }
                  points {
                    point
                  }
                }
              }
              ... on PrismicPage12 {
                data {
                  calcule
                  graph {
                    localFile {
                      url
                    }
                  }
                  contenu {
                    text
                  }
                  don
                  don_number
                  retour_impot_number
                  retour_impots
                  salaire_brut
                  salaire_brut_number
                  salaire_net
                  salaire_net_apres
                  salaire_net_number
                  salaire_semaines_number
                  salaire_net_semaines
                  veritable_cout
                  veritable_cout_number
                }
              }
              ... on PrismicPage13 {
                data {
                  graph {
                    localFile {
                      url
                    }
                  }
                  don
                  don_number
                  imposition_remuneration
                  imposition_remuneration_info
                  imposition_remuneration_number
                  contenu {
                    html
                  }
                  retour_impot_info
                  retour_impots
                  retour_impots_number
                  revenus_compagnie
                  revenus_compagnie_number
                  semaine_heures_number
                  semaines_heures
                  taux_horaire
                  taux_horaire_number
                  veritable_cout_don
                  veritable_cout_number
                }
              }
              ... on PrismicPage14 {
                data {
                  information
                  graph {
                    localFile {
                      url
                    }
                  }
                  listes {
                    choix {
                      html
                    }
                  }
                }
              }
              ... on PrismicPage15 {
                data {
                  graph {
                    localFile {
                      url
                    }
                  }
                  listes {
                    list_text {
                      html
                    }
                  }
                  information
                }
              }
              ... on PrismicPage16 {
                data {
                  information
                  graph {
                    localFile {
                      url
                    }
                  }
                }
              }
              ... on PrismicPage17 {
                data {
                  contenu {
                    html
                  }
                  contact
                  copyright
                  info
                }
              }
            }
          }
        }
        site_title {
          text
        }
        menu {
          document {
            ... on PrismicMenu {
              data {
                text_1
                text_2
                text_3
              }
            }
          }
        }
      }
    }
  }
`

const Projet = ({ data }) => {
  return <ProjetLayout data={{ data }} />
}

Projet.propTypes = {
  data: PropTypes.object,
}
export default Projet
