import React from "react"
import Projet_Sec_1 from "./Projet_Sec_1"
import Projet_Sec_2 from "./Projet_Sec_2"
import Projet_Sec_3 from "./Projet_Sec_3"
import Projet_Sec_4 from "./Projet_Sec_4"
import Projet_Sec_5 from "./Projet_Sec_5"
import Projet_Sec_6 from "./Projet_Sec_6"
import { WidthLimiterContainer } from "../../Layout/styles"
import { ProjetContainer } from "./styles"
import Reveal from "react-reveal/Reveal"

const index = ({ query }) => {
  return (
    <Reveal effect="fadeInUp">
      <ProjetContainer className="test">
        <WidthLimiterContainer>
          <Projet_Sec_1 querySection1={query.page2} />
          <Projet_Sec_2
            querySection2={query.page3}
            querySection2P2={query.page4}
          />
          <Projet_Sec_3
            querySection3={query.page5}
            querySection3P2={query.page6}
            querySection3P3={query.page7}
            querySection3P4={query.page8}
            querySection3P5={query.page9}
          />
          <Projet_Sec_4
            querySection4P1={query.page10}
            querySection4P2={query.page11}
          />
          <Projet_Sec_5
            querySection5P1={query.page12}
            querySection5P2={query.page13}
          />
          <Projet_Sec_6
            querySection6P1={query.page14}
            querySection6P2={query.page15}
            querySection6P3={query.page16}
          />
        </WidthLimiterContainer>
      </ProjetContainer>
    </Reveal>
  )
}

export default index
