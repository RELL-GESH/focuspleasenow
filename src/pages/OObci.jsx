import React from "react";
import Navbar from "../components/Navbar";
import GridBox from "../components/GridBox";
import Pocasi from "../components/Pocasi";
import Logo from "../assets/obecdobrenlogo.png";
import { Padding } from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import Options from "../components/Options";
import { Box } from "@mui/material";
import { green } from "@mui/material/colors";
import Prihlasit from "../components/Prihlasit";
import Button from "../components/Button";
import Hrad from "../assets/hrad-kokorin-12.jpg";
import GridBox2 from "../components/GridBox2";
import GridBox3 from "../components/GridBox3";

function OObci() {
  return (
    <div>
      <div>
        <Navbar />
        <h2>ahoj</h2>
        <Box sx={{ bgcolor: green[900] }}>
          <h2 style={{ textAlign: "center", color: "white" }}>
            O obci
            <br />
          </h2>
          <h5 style={{ color: "white", padding: 15}}>
            Obec Dobřeň (německy Dobrzin) je původně německá obec nacházející se
            v okrese Mělník na severu Středočeského kraje. Rozkládá se asi
            sedmnáct kilometrů severně od Mělníka. Žije zde 168[1] obyvatel.
            Zástavba vsi s řadou cenných příkladů německé lidové architektury je
            od roku 1995 chráněna jako vesnická památková rezervace.
            <br />V obci Jestřebice (přísl. Klučno, 361 obyvatel, samostatná
            obec se později stala součástí Dobřeně) byly v roce 1932 evidovány
            tyto živnosti a obchody:[8] jednatelství, kartáčník, řezník, 2
            hostince, 3 obchody se smíšeným zbožím, obchod se zemskými
            plodinami, rolník, nákladní autodoprava, 4 obchody s ovocem, kovář,
            krejčí, 3 obuvníci, trafika, kolář, výroba cementového zboží.
          </h5>
        </Box>
        <Box sx={{ bgcolor: green[900] }}>
          <h2 style={{ textAlign: "center", color: "white" }}>Památky</h2>
        </Box>
        <Box sx={{ bgcolor: green[900] }}>
          <h2 style={{ textAlign: "center", color: "white" }}>Hrad Kokořín</h2>
          <GridBox2 />
        </Box>
        <Box sx={{ bgcolor: green[900] }}>
          <h2 style={{ textAlign: "center", color: "white" }}>Skalní stůl na Kokořínsku</h2>
          <h5 style={{ color: "white", padding: 15}}>
            Hrad Kokořín se rozkládá na pískovcových skalách Kokořínského dolu.
            Pod ním údolím protéká říčka Pšovka a v okolí najdete nejrůznější
            pískovcové útvary roztodivných tvarů, lesy plné hub a rozesetá
            malebná stavení lidové architektury.
          </h5>
          <GridBox3 />
        </Box>
        <Box sx={{ bgcolor: green[900] }}>
          <h2 style={{ textAlign: "center", color: "white" }}>
            Napište nám
            <br /> <Prihlasit />
          </h2>
        </Box>
        <Box sx={{ bgcolor: green[900] }}>
          <h5 style={{ textAlign: "center", color: "white" }}>
            @David F.
            <br /> Jiri T. <br /> Petr C.
          </h5>
        </Box>
      </div>
    </div>
  );
}

export default OObci;