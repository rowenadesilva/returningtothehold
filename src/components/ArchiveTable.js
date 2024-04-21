import React, { Component } from "react";
import styled from "styled-components";
import { TrackerContext } from "./TrackerContext";

const TableWrapper = styled.table`
  position: absolute;
  border: 1px solid white;
  border-spacing: 0;
  text-align: left;
  left: 0;
  width: 42vw;
  top: calc(var(--height) * 0.42);
  left: calc(var(--width) * 0.3);
  text-align: center;
  font-size: 0.8em;
`;

const TableHead = styled.thead`
  display: block;
  border: 1px solid white;
  border-style: none none solid none;
`;

const HeaderColumn = styled.th`
  width: 7vw;
  border-right: 1px solid white;
  &:last-child {
    border-right: none;
  }
`;

const BodyColumn = styled.td`
  width: 7vw;
  height: 30px;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  &:last-child {
    border-right: none;
  }
`;

const TableBody = styled.tbody`
  display: block;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const TabelRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
    color: black;
  }
`;

class Table extends Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef(null);
  }

  componentDidUpdate() {
    console.log("scroll: " + this.tableRef.current.scrollTop);
    console.log("tracker: " + this.props.context);
    console.log("clientHeight: " + this.tableRef.current.scrollHeight);

    this.tableRef.current.scrollTop = (this.props.context - 41) * 400;
  }

  render() {
    return (
      <div>
        <TableWrapper>
          <TableHead>
            <tr>
              <HeaderColumn>Voyage ID</HeaderColumn>
              <HeaderColumn>Year</HeaderColumn>
              <HeaderColumn>Vessel name</HeaderColumn>
              <HeaderColumn>
                Place of <br />
                departure
              </HeaderColumn>
              <HeaderColumn>
                Principal place <br />
                where captured
                <br /> were purchased
              </HeaderColumn>
              <HeaderColumn>
                Principal place <br />
                where captured
                <br /> were landed
              </HeaderColumn>
            </tr>
          </TableHead>
          <TableBody ref={this.tableRef}>
            <TabelRow>
              <BodyColumn>81106</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Eagle</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Cameroons</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81579</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>George</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo North</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>80774</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Ceres</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81639</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Governor Dalziel</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Cape Coast Castle</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>80408</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Bacchus</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Suriname, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81656</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Governor Wentworth</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81732</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Harmonie</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                West CenTabelRowal Africa and St. Helena, port unspecified
              </BodyColumn>
              <BodyColumn>Cumingsberg</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81739</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Harriott</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Lagos, Onim</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81780</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hector</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81790</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Helen</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>Dominica, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81834</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hibernia</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Rio Pongo</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81345</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Experiment</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn></BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81838</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Higginson, Senior</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                Bight of Biafra and Gulf of Guinea Islands, port unspecified
              </BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81844</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hillsborough</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Newcastle (Nevis)</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81881</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Horatio</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>83481</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Sally</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bassa</BodyColumn>
              <BodyColumn>Barbados, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81928</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Isaac</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Windward Coast (Nunez - Assini)</BodyColumn>
              <BodyColumn>Basse-Terre</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81974</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>James</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>St. Vincent, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81979</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Jane</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>Barbados, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81793</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Henrietta</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Cameroons</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82043</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>John</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82206</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Africaine</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82254</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Liberty</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                West CenTabelRowal Africa and St. Helena, port unspecified
              </BodyColumn>
              <BodyColumn>St. Kitts, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82357</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Lord Rodney</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82384</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Lottery</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Montego Bay</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82447</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Margaret</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>French Caribbean, colony unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82454</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Margery and Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Sierra Leone estuary</BodyColumn>
              <BodyColumn>Grenada, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82466</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Maria</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82569</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82612</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gabon</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82635</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary Ann</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Windward Coast (Nunez - Assini)</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82639</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary Ann</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82672</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>May</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82760</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Minerva</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gabon</BodyColumn>
              <BodyColumn>Saint John (Antigua)</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82783</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Molly</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82802</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Montezuma</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82873</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Nanny</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82877</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Narcissus</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82942</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Nile</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Malembo</BodyColumn>
              <BodyColumn>Berbice</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82995</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Otter</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                Bight of Biafra and Gulf of Guinea Islands, port unspecified
              </BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>83142</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Polly</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81739</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Harriott</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Lagos, Onim</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81780</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hector</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81790</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Helen</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>Dominica, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81834</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hibernia</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Rio Pongo</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81345</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Experiment</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn></BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81838</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Higginson, Senior</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                Bight of Biafra and Gulf of Guinea Islands, port unspecified
              </BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81844</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Hillsborough</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Newcastle (Nevis)</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81881</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Horatio</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>83481</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Sally</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bassa</BodyColumn>
              <BodyColumn>Barbados, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81928</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Isaac</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Windward Coast (Nunez - Assini)</BodyColumn>
              <BodyColumn>Basse-Terre</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81974</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>James</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>St. Vincent, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81979</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Jane</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Africa, port unspecified</BodyColumn>
              <BodyColumn>Barbados, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>81793</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>Henrietta</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Cameroons</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82043</BodyColumn>
              <BodyColumn>1806</BodyColumn>
              <BodyColumn>John</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Charleston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82206</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Africaine</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82254</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Liberty</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                West CenTabelRowal Africa and St. Helena, port unspecified
              </BodyColumn>
              <BodyColumn>St. Kitts, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82357</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Lord Rodney</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82384</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Lottery</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Montego Bay</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82447</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Margaret</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>French Caribbean, colony unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82454</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Margery and Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Sierra Leone estuary</BodyColumn>
              <BodyColumn>Grenada, place unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82466</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Maria</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82569</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82612</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gabon</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82635</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary Ann</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Windward Coast (Nunez - Assini)</BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82639</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Mary Ann</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gold Coast, port unspecified</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82672</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>May</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82760</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Minerva</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Gabon</BodyColumn>
              <BodyColumn>Saint John (Antigua)</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82783</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Molly</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn>TabelRowinidad, port unspecified</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82802</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Montezuma</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Calabar</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82873</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Nanny</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82877</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Narcissus</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Congo River</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82942</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Nile</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Malembo</BodyColumn>
              <BodyColumn>Berbice</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>82995</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Otter</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>
                Bight of Biafra and Gulf of Guinea Islands, port unspecified
              </BodyColumn>
              <BodyColumn>Demerara</BodyColumn>
            </TabelRow>
            <TabelRow>
              <BodyColumn>83142</BodyColumn>
              <BodyColumn>1807</BodyColumn>
              <BodyColumn>Polly</BodyColumn>
              <BodyColumn>Liverpool</BodyColumn>
              <BodyColumn>Bonny</BodyColumn>
              <BodyColumn>Kingston</BodyColumn>
            </TabelRow>
          </TableBody>
        </TableWrapper>
      </div>
    );
  }
}

const ArchiveTable = () => {
  return (
    <TrackerContext.Consumer>
      {(value) => <Table context={value} />}
    </TrackerContext.Consumer>
  );
};

export default ArchiveTable;
