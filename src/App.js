import React, {Component} from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Grid,
  Flag,
  Icon,
  Input,
  Header,
  Image,
  Divider,
  Label,
  Container,
  Button
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <br />

        <Grid container columns={4}>
          <Grid.Column width={1}>
            <Flag name="id" />
          </Grid.Column>

          <Grid.Column width={1}>
            <Icon name="angle left" size="large" />
          </Grid.Column>

          <Grid.Column width={1}>
            <Icon name="angle right" size="large" />
          </Grid.Column>

          <Grid.Column width={10}>
            <Input
              type="text"
              placeholder="search..."
              icon={<Icon name="star" />}
              style={{width: "700px"}}
            />
          </Grid.Column>

          <Grid.Column width={2}>
            <Header as="h4">
              <Image
                circular
                src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              />
              Jooprima
            </Header>
          </Grid.Column>
        </Grid>

        <Divider horizontal>
          <h3>Selamat Datang!!!</h3>
        </Divider>

        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column floated="left" />
            <Grid.Column floated="right">
              <Label as="a" color="teal" tag>
                Sport
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <br />

        <Container textAlign="center">
          <p>
            Usai FIM MotoGP Court of Appeal mengadakan sidang mengenai kasus
            penggunaan winglet Ducati, hasil keputusan soal legalitas perangkat
            tersebut akan diumumkan pada Senin (25/3) atau Selasa (26/3),
            demikian yang dilansir Crash.net. Sidang ini telah digelar di
            Jenewa, Swiss pada Jumat (22/3) dan dihadiri perwakilan Ducati dan
            empat pabrikan pemrotes, yakni Aprilia, Honda, KTM dan Suzuki. Dalam
            sidang ini, Ducati diwakili sang General Manager sekaligus insinyur
            utamanya, Luigi 'Gigi' Dall'Igna dan sang Koordinator Teknis,
            Fabiano Sterlacchini. Sementara itu Aprilia Racing diwakili sang
            CEO, Massimo Rivola; sementara Honda, KTM dan Suzuki masing-masing
            diwakili oleh manajer tim masing-masing, yakni Alberto Puig, Mike
            Leitner dan Davide Brivio. Belum ada pernyataan resmi baik dari
            MotoGP maupun Federasi Balap Motor Internasional (FIM), namun
            Dall'Igna telah mengaku kepada La Gazzeta dello Sport bahwa Ducati
            telah diminta untuk mengungkapkan data bahwa winglet yang tertempel
            pada swingarm tiga motor Desmosedici GP19 di Qatar lalu memang
            sekadar berfungsi mendinginkan ban belakang dan tidak menghasilkan
            downforce tambahan. Jika winglet ini benar-benar terbukti
            menghasilkan downforce tambahan dan dinyatakan ilegal oleh FIM, maka
            Ducati tak boleh menggunakannya lagi terhitung sejak MotoGP
            Argentina pada 29-31 Maret, dan kemenangan Andrea Dovizioso di Qatar
            terancam dicabut. Meski begitu, keempat pabrikan pemrotes telah
            menegaskan bahwa mereka tak ingin kemenangan Dovizioso dan Ducati
            dicabut oleh FIM, dengan dalih bahwa protes ini mereka layangkan
            hanya untuk meminta klarifikasi soal regulasi yang telah ditentukan
            Direktur Teknis MotoGP, Danny Aldridge
          </p>
        </Container>

        <br />

        <Container textAlign="center">
          <Button icon labelPosition="left" color="teal">
            <Icon name="plus" />
            Tambahkan Tautan ke List
          </Button>
        </Container>
      </div>
    );
  }
}

export default App;
