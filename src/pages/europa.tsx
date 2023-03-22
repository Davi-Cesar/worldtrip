import { QuestionOutlineIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  HStack,
  Icon,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { City } from "../components/City";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

export default function Europa() {
  return (
    <>
      <Header />
      <Banner
        continente={"Europa"}
        image={
          "https://s3-alpha-sig.figma.com/img/9700/0556/be698d9fa6470e23713e801d9f04e27d?Expires=1679875200&Signature=o8wDVwVHARNrk4qH8ZMD54EpNJD4rP6qxgG1H8jyMniUFCGbLPUu8vIJox2Mr26w8rzgtyTn6tXLomLMnQTnE0HD~zZhm80mt2hS4Bw52L9Uf2is1NuA2FeDFlz79mfHrnIjtnFuRxCquxMsYYihKEBvWCBXVMXDCZ4bdJDEnKtYL4Py48Ol9G8ucmMOAEy7Ys5-RocZI3sVokOo3ZM36Zauo6QX-2ZgQ4216HQDoAtyQOT-ObYlvfKnGOT3gWToWny-yGxtingntlVUh9TburZG6dZ6Kg-4Tt4OuXw3GAcjyf3DC6-l1C4XjRwO88Sk-xmqxIe~99Wkz5kEziaWjA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        }
      />
      <HStack spacing="24px" h={500} w="1200px" margin="0 auto" p="5">
        <Box p="0">
          <Text textAlign="justify" w="500px" fontSize="1xs">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>
        </Box>
        <Flex w="100vw" justifyContent="center">
          <HStack>
            <Box w="150px" h="100px" textAlign="center">
              <Box fontWeight="medium">
                <Text color="yellow.500" fontWeight="medium" fontSize="3xl">
                  50
                </Text>
                países
              </Box>
            </Box>
            <Box w="150px" h="100px" textAlign="center">
              <Box fontWeight="medium">
                <Text color="yellow.500" fontWeight="medium" fontSize="3xl">
                  60
                </Text>
                línguas
              </Box>
            </Box>
            <Box w="150px" h="100px" textAlign="center">
              <Box fontWeight="medium">
                <Text color="yellow.500" fontWeight="medium" fontSize="3xl">
                  100
                </Text>
                cidades +100 <Icon boxSize={4} as={QuestionOutlineIcon} />
              </Box>
            </Box>
          </HStack>
        </Flex>
      </HStack>

      <Box h="3xl" w="1200px" margin="0 auto" p="5">
        <Text p="5px 0px 5px 0px" fontSize="36px" fontWeight="semibold">
          Cidades +100
        </Text>
        <Flex>
          <HStack spacing={"24px"}>
            <Wrap>
              <WrapItem>
                <Center>
                  <City
                    image="https://s3-alpha-sig.figma.com/img/1db8/ec22/64a5ba2142d081c49ed2ecccb92bc064?Expires=1679875200&Signature=m8nGV~NHAlT4li4wUp-UadW71FVJsD3pFHd5j5EfckuvkyBCC7kJLPFkd8Pia5RJs06ie8aVM1s2AlTr9eJsshFTdaid4rnaRbUVuqNIf5aiFFdbz5LezNCFHlDaC-w2nBiFJ6D9sJ2h2p0m8vwFMvtD9haRKvP1u~UU-yukBKTjL7GcNPNpjbw0HzqUYJhnfcUU4sCeO1NGqpFUQ~sML0MO-2rMas-yIOSfVA6JUh1Pbh-r9HJjPTMGnX1gATMSAxqIb0OevZxXyelKc7Tr1MDQdpEuNPrJdjJhszBBbHdEOhzJE4obqs2psap42AYbydbFx0ui7sG60ooGgq9~LA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    name="Londres"
                    country="Reino Unido"
                    icon="https://s3-alpha-sig.figma.com/img/839d/769a/09fd5ea34d2c270558583d90a952d2f3?Expires=1679875200&Signature=hFY8fwFW9iX5tHy3giLJkXUlEssu~5r9d4PM6MmVBfDFF~Bvw9ygAZ9G0q71sCv3CSkdCDasnTz3HLm~oOUWeOa-cjfs2Vsr9BlX6iQLkDwdjbdd54--Fwq8l5a~n3DMsZIvOQi8FfSpI9W44aVvHf38NlDk~9OGeI-wGTuOAcPgtBwZ5Z86YDHY-buZQrq1GSmVBeMOoNbfX-ftEN6nP-Ju6u6hPprnpjW0Pu9wZhOeOEZIHV7UgwADoh2M49KkoFpPlNCBOIY-UScpQH52Op-jMCU5qx6Ee12HTFQmR013R45Si1Up-OIzpNaYQO29WZrP3uldQeJrMFgojjgQ3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center>
                  <City
                    image="https://s3-alpha-sig.figma.com/img/532d/7211/9a1187523e3bc218691ba4d94644ea37?Expires=1680480000&Signature=GiQjdcR6exEBz3scNI~VM4u2bnQpOgx3BWJ4LVTySR3rKQxaTxd~d2l2J7hR6YqRcEDQR77RGPs6-a3i833q1bXhRJgqzwhSXo7ko1VNNnEtZug54gwJEtTHGnQF92qj0~qS84XlvWdFSZKRCfJsMMsNuSVXD6BWqI4xG2DpFI25ZaR24PatACDoEsQN4H9jFtZdz2qnO35N59mrLy3axOxj-zHetDvdrKgeXV4JAYfAowPCKwiruc0trIRvxs~zTaiOSPeJ8ZbQ0gHchVLM0yHfKeAkQ0ECtvoXAYBXtp9UF8Cz-NeyKvbzD~awGcBc-svspQ1yy32JPvR0YZ9ahA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    name="Paris"
                    country="França"
                    icon="https://s3-alpha-sig.figma.com/img/1c21/268e/693dd25a483603ff752fee647c63c88d?Expires=1680480000&Signature=cTHPkR7gv~1U9P-rU4CSaADXTuSoydI7hir~YWUE8fhrTpHwAOSHMn7b1QcZvoooEjpjs5po9LGPfFxaPO4~uZ7N13AWi5UEhWIcBEmfT4dnrx-jahzBBPoFJBYELJGi78QjCuhErnCqSQ34Do7WxKJJvSxYYqXS9FCef1-IpB8aW7qhyUfQWxAL~I-gjlVQ~thCJLUmXXKOGiR92rR8RcHw3pLq1cjJxxMHJK1Al84ibmeRFlwASu-8TIgddkKdK33WAu-j3dieQ4rWHqPcip-LSwZz5UCPH2Lywrf3~A3nt4rYb78IwnWc0LNb45X~A48QSay9FqQDex2weEZCsA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center>
                  <City
                    image="https://s3-alpha-sig.figma.com/img/eee0/88c4/eaa4a71e49d6569db7087e2ea17daac2?Expires=1680480000&Signature=gyCO9dVPEWSWpehkdfbAIMlBkPzeHtc5MLcPTKFpYx~Edz0rA4YnL45MzmW8gT4sVBEsh50HtrTAo02MzQdEXYxch72v59jD7N6nFukqU3SYruNi32C0atVufSEL-e9kONwGorvzNuSlZJ6IFMwm3Pnr3sgDoHvRsL6BK2sc8ZDU5RnQ8Kjzzdy1gxjRJYNOwPnziF-1aRno8ueq9aU9dhtEs66TtOUdRzYt0-KAWP~NXYY~wOCunJ30QWZ-gvplPcqqQeamaJwsuX3tYPOsQNhbdHGRw3o0uybrrcwIlJQFqTBDHwfv6nSAppiMmps6Jb-S0ncnw3QHj3jJOvwItQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    name="Roma"
                    country="Itália"
                    icon="https://s3-alpha-sig.figma.com/img/f2d7/eddd/fc48f63507cc94f938afd448c7d8af2c?Expires=1680480000&Signature=clAiUnJjt0-~bPxary7NB~ckucP~UGKjsYILPBttfCCEVzMbQbq2fJ8f2qqBHN~cNtB90hKuuZK8Z07KeRTHrDgMyoHv-58h3o7-IvQsCdfoRdL-W5ltf7xt4TA5x31MmHgxFtBSz4VRX3ypsT7VpfWAfM-PvFHp3FXSuIkBAT~dQmeEFkJQqazbOR8cusyAu73gu0URzjOi3kJt5GOoIIAG3SpB-v1Pa-Mcre3kKcal7LBtFUODVIhIv0EarZ4xlfg5c5MpFaC2DhSrk-wca6CFVQe2hpY4aMw8kajA0Nwdzxe9-2gjVNY5-JtdxXVanV2iduGYMHdDwWkYG5q0WQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center>
                  <City
                    image="https://s3-alpha-sig.figma.com/img/988f/29a2/12691461c54979a5a53403589effd62a?Expires=1680480000&Signature=bq1tfkjKLapRE5rJ2sDkglrvhQd4GuuvOAT6hF2ZbRGKPVPyCs8b5cZtWnttEUmtJ1um0~H46c3fiZX0Hgh3UHO2-pcWL2-kNaxCCvZ0dk9~VR4mdMH0uNs5Q5r2F6sSz4Yp4oEqT~9R0e-yev-ZlexbWjou~dj4KkrVLfJa6WVKxCRcEelK6Mpmc1NafF7IgdE97-pGkONZGhz1hmHIJaMh9Cy0Txg-Ddd2eJFGi5p6EbWWu0jYA71M5PF8kfjvImkawz6MIRAQHSpCRKcnVrah~3TIw~YzIbHZWHUYSm6OrdFhRt7at8t5EzeZoXV0mT8zfZgrBWwzw-m7~GsCiQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    name="Praga"
                    country="República Tcheca"
                    icon="https://s3-alpha-sig.figma.com/img/fa29/6de3/b0061638a1a5fa871a89173caa9e62dc?Expires=1680480000&Signature=CCkaMvaCKmt4Zvu6F2DgGpBGghuGazaIDHg9MNWgcJJR57GuWgw05Hv3sQ9tZ~CGOewNrRwlcTqEVd1tup2x4c1ROq62sJXZs~DrB6pxS4PhPWwte3OTaIhwimi187MRm61tYFU-9p4rqpeiNo0s6BtYI7NWAMBPefCf0xlzUrlGC6XjPvKDCRFz3GaZhUZo1JwHG254BkQXlawTHhiqU-1EFnUfNDG41r0Vg3WSMaJB0o1E5KPLhgk5P8y0G1zVqxoI4wPphQiM69tFTOBaA2XIL1V7X6IEaTZn2j9jBvad2IEYYraQHZ42RZ69olACuom2pKaFdJStWn6XTzReBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </Center>
              </WrapItem>
              <WrapItem>
                <Center>
                  <City
                    image="https://s3-alpha-sig.figma.com/img/f650/fbff/09d2158955ace9be8abd11acef6c9606?Expires=1680480000&Signature=JwJFeQF-6vscgXRWXU-Z8zmPo2FIAmK-s62KQkIZU3ms7KTLNdfbv1eyGW3br13sC8IfWV-dXCO7qURV8F1LjVkMvcz-~IewVXa8QvTL6CHKn3PsQcFMu6R1Kr9vd8nfQ1Rhafz1cYbRubc0fotXGR48s6h3F7R4e6LTuIDWEQOlYfobisJ9DAGdb09o8KezANQdCPmSupK3uDO-LU7msJ6W5nRLnCP7kQxhY90OG24LsQGDBeOU7NfDMJma8MrVWlpqZylU7PjYqoV77tJ-j0a1kNomUp3O~9SSyqJuRXEh0m8tE~OuvsCPcJvfvXch9~u-M7MkC7Y8WYIKlfFNow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    name="Amsterdã"
                    country="Holanda"
                    icon="https://s3-alpha-sig.figma.com/img/a216/dd9d/438d40a947e2b1acdaa6d7adefeb6f35?Expires=1680480000&Signature=kXltUFWhJac-X4KIhHKnMqAUQldFScbLBL9~mWPIPxnORBBWZLFsqc1XS27XRO8BuYJjAhuKVmKrmX0NJtFPIBtpp-EIguQtlLH82FWiP7HYTziYg8kSKs4-PRHzC1~nppv6Yhg9K72HpgGrkPa8DJF-eeaBfwzEzGwpSUogqQOzlsTTjs48CZ4dGCDTC2Rvoofnxnmu0HRcxZLdhfur9q0MD4lb2~TD6YlKJO1KznPAw9fjOOxpKOHcweTr2fF~hy3UFKshaqvATbGT4xGdYCDa60P8d-gv7L~Z2Ge-J9fndokX~TN1h5fRKu2GabN3Wo~xAD69W5HZ4PBHQy6rPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  />
                </Center>
              </WrapItem>
            </Wrap>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
