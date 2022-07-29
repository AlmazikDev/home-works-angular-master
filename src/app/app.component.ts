import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 data  = [{
    name: "Best footballer",
    title: "Cristiano Ronaldo",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NOR-yi0XSvNZcrInughXdsooQMRrOMfSdQ&usqp=CAU",
    desc: "Cristiano Ronaldo dos Santos Aveiro GOIH ComM (Portuguese pronunciation: [kɾiʃˈtjɐnu ʁɔˈnaɫdu]; born 5 February 1985) is a Portuguese professional footballer who plays as a forward for Premier League club Manchester United and captains the Portugal national team. Often considered the best player in the world and widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards[note 3] and four European Golden Shoes, the most by a European player. He has won 32 trophies in his career, including seven league titles, five UEFA Champions Leagues, and the UEFA European Championship. Ronaldo holds the records for most appearances (183), goals (140), and assists (42) in the Champions League, goals in the European Championship (14), international goals (117), and international appearances by a European (189). He is one of the few players to have made over 1,100 professional career appearances, and has scored over 800 official senior career goals for club and country."
  },

 {
    name: "Best UFC fighter",
    title: "Jon Jones",
    img: "https://www.fightsports.tv/wp-content/uploads/Jon-Jones-1-2-scaled.jpg",
    desc: "Jonathan Dwight Jones (born July 19, 1987) is an American professional mixed martial artist currently signed to the Ultimate Fighting Championship (UFC), where he has competed in the light heavyweight division. He is a former two-time UFC Light Heavyweight Champion, holding the title from March 2011 to April 2015 and from December 2018 to August 2020. Jones also held the interim UFC Light Heavyweight Championship in 2016. As of July 4, 2022, he is #11 in the UFC men's pound-for-pound rankings."

    
  }, {
    name: "Best hockey player",
    title: "Alexandr Ovechkin",
    img: "https://ss.sport-express.ru/userfiles/materials/174/1745232/volga.jpg",
    desc: "Alexander Mikhailovich Ovechkin (Russian: Александр Михайлович Овечкин, IPA: (born 17 September 1985) is a Russian professional ice hockey left winger and captain of the Washington Capitals of the National Hockey League (NHL). Nicknamed Ovi (alternatively spelled Ovie) and the Great Eight, Ovechkin has been widely regarded as one of the greatest goal scorers of all time[1][2][3] and holds the record for the most power play goals in NHL history."
  }]

  selectIdData: number = 1
  selectData(id: number) {
    this.selectIdData = id
  }
}
