import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Pagination from './Pagination.js';
import Home from './Home.js';
import TabsInfo from './TabsInfo.js';

function App() {
  const tabsContent = [
    {
      name: "Энергия",
      decs: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
      imgUrl: 'https://avatars.mds.yandex.net/get-zen_doc/114944/pub_5bbadecd17241200aa647a42_5bbadf238bc06200ace6ea10/scale_1200'
    },
    {
      name: "Энергетика",
      decs: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
      imgUrl: 'https://eenergy.media/wp-content/uploads/2018/03/Energy-Image.jpg'
    },
    {
      name: "Утилизация отходов",
      decs: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
      imgUrl: 'https://lh3.googleusercontent.com/proxy/VIjolKcmTbvsYCz7FG_a6eEw6imxgvqygzCXBtWsUeaFqDunSueed77DA1B1B5HmhatYIsoEYPHJrHUoD6MP7319YLcE6hHBTI-pblPLbEM3D1FhDl558KAckMC_lyTWPyU'
    }
  ]
  return (
    <Router>
      <Switch>
        <Route path='/tabs'>
          <TabsInfo tabsContent={tabsContent} />
        </Route>
        <Route path='/pagination' component={Pagination} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
