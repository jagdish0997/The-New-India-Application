import React, { Component } from "react";
import NewsItime from "./NewsItime";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultPros = {
      country : 'in',
      catagory : "general"
    }

    static propTypes = {
      country :  PropTypes.string,
      catagory : PropTypes.string,
    }

  articles = [
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "India to withdraw 2000-rupee notes from circulation - Reuters India",
      description:
        "India will start withdrawing its highest value currency notes from circulation, the central bank said on Friday, in a move that economists said could boost bank deposits at a time of high credit growth.",
      url: "https://www.reuters.com/world/india/india-withdraw-2000-rupee-notes-circulation-central-bank-2023-05-19/",
      urlToImage:
        "https://www.reuters.com/resizer/AnLjX6D9lXGcD24wMKBJIPaZels=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SMDS3QTUH5O53FYA3W46X4HGLQ.jpg",
      publishedAt: "2023-05-20T07:30:00Z",
      content:
        "MUMBAI, May 19 (Reuters) - India will start withdrawing its highest value currency notes from circulation, the central bank said on Friday, in a move that economists said could boost bank deposits at… [+2421 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Joy Addison",
      title:
        "Reports reveal the risk for strokes is on the rise in young adults - Fox News",
      description:
        "May is National Stroke Awareness Month, and researchers are spreading awareness on increasing occurrence of strokes in younger adults",
      url: "https://www.foxnews.com/health/reports-reveal-risk-strokes-rise-young-adults",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/05/computer-screen.jpg",
      publishedAt: "2023-05-20T06:11:00Z",
      content:
        "HOUSTON May is National Stroke Awareness Month, and along with education on strokes, doctors are looking for answers to why strokes are happening in younger patients.\r\nThe American Stroke Association… [+2451 chars]",
    },
    {
      source: { id: null, name: "The Athletic" },
      author: "Jay King, Jared Weiss, Joe Vardon",
      title:
        "Heat take 2-0 series lead over Celtics in Eastern Conference finals: How Miami’s intensity wore Boston down - The Athletic",
      description:
        "The Heat are in position to end this series at home. Game 3 is at 8:30 p.m. Sunday in Miami.",
      url: "https://theathletic.com/4536329/2023/05/19/heat-celtics-game-2-result/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/05/19230911/GettyImages-1256223379-1024x683.jpg",
      publishedAt: "2023-05-20T05:30:45Z",
      content:
        "BOSTON Going nose to nose with Jimmy Butler has not worked out well for the Celtics so far in this series.\r\nBoston was still up by seven in the fourth quarter of Game 2 in the Eastern Conference fina… [+5029 chars]",
    },
    {
      source: { id: null, name: "Suntimes.com" },
      author: "Georgia Nicols",
      title: "Horoscope for Saturday, May 20, 2023 - Chicago Sun-Times",
      description: null,
      url: "https://chicago.suntimes.com/2023/5/20/23727850/horoscopes-today-saturday-may-20-2023",
      urlToImage:
        "https://cst.brightspotcdn.com/dims4/default/9b1d19e/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F_ImIiAHyzkRwoohzTba2CpssaU4%3D%2F0x0%3A870x630%2F870x630%2Ffilters%3Afocal%28435x315%3A436x316%29%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F24664992%2FGeorgia_mug.jpeg",
      publishedAt: "2023-05-20T05:01:58Z",
      content:
        "Moon Alert\r\nThere are no restrictions to shopping or important decisions. The moon is in Gemini.\r\nAries (March 21-April 19)\r\nA tricky day! Be careful of ego battles and aggressive moves especially in… [+3859 chars]",
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: "Kana Inagaki, Henry Foy, Demetri Sevastopulo, Jim Pickard",
      title:
        "G7 prepares unified response to Chinese 'economic coercion' - Financial Times",
      description:
        "Leaders at Hiroshima summit to unveil ‘common set of tools’ to increase security",
      url: "https://www.ft.com/content/cc19f9f6-b3b1-4f19-b112-8dda8da1c0d9",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F0fe526cd-f841-4dfe-a869-52dbe2fe2653.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2023-05-20T03:51:04Z",
      content:
        "G7 leaders are set to unveil measures to respond to Chinese economic coercion, as the US, Japan and other members of the group intensify efforts to adopt a unified approach to Beijing. \r\nUS national … [+3310 chars]",
    },
    {
      source: { id: "associated-press", name: "Associated Press" },
      author: "Foster Klug, Adam Schreck",
      title:
        "World leaders warn China and North Korea on nukes as Ukraine's Zelenskyy travels to G7 summit - The Associated Press",
      description:
        "HIROSHIMA, Japan (AP) — Ukrainian President Volodymyr Zelenskyy landed Saturday in Hiroshima for diplomatic talks with the leaders of the world’s most powerful democracies who have tightened sanctions meant to punish Moscow and change the course of its 15-mon…",
      url: "https://apnews.com/8d22eac47970b7051000fbd5b0ebba70",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/458d1f04101d49f89be537ca62df5b03/3000.webp",
      publishedAt: "2023-05-20T03:40:24Z",
      content:
        "HIROSHIMA, Japan (AP) Ukrainian President Volodymyr Zelenskyy landed Saturday in Hiroshima for diplomatic talks with the leaders of the worlds most powerful democracies who have tightened sanctions m… [+6853 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Bryson DeChambeau Shoots a 1-over 71 | Round 2 | 2023 PGA Championship - PGA Championship",
      description:
        "Bryson DeChambeau Shoots a 1-over 71, to make the cut and stay well in contention at the 2023 PGA Championship at Oak Hill Country Club. Subscribe now: https...",
      url: "https://www.youtube.com/watch?v=PEKnhKbfzVc",
      urlToImage: "https://i.ytimg.com/vi/PEKnhKbfzVc/maxresdefault.jpg",
      publishedAt: "2023-05-20T02:30:09Z",
      content: null,
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Leanne Butkovic",
      title:
        "Fast X: Post Credits Scene, Ending Explained and Our Biggest Questions About Fast 11 - IGN",
      description:
        "Is there a post credits scene in Fast X? What happened at the end of the movie? And what are our biggest questions about what it all means for Fast 11?",
      url: "https://www.ign.com/articles/fast-x-ending-explained-post-credits",
      urlToImage:
        "https://assets-prd.ignimgs.com/2023/05/18/fast-x-ending-post-credits-thumb-1684450787068.jpg?width=1280",
      publishedAt: "2023-05-20T02:24:34Z",
      content:
        "Let's cut to the chase: You want to know if there are any post-credits scenes in Fast X, the latest Fast and the Furious movie. We'll tell you right here: There is one scene and it comes during the m… [+10232 chars]",
    },
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title:
        "Zelenskky hails Biden’s decision on F-16 jet training for Ukraine - Al Jazeera English",
      description:
        "Training Ukrainian pilots on US-made F-16 fighters will ‘greatly enhance our army in the sky’, says Ukraine’s President.",
      url: "https://www.aljazeera.com/news/2023/5/20/zelenskky-hails-bidens-decision-on-f-16-jet-training-for-ukraine",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/05/AP18192430543050-1684550233.jpg?resize=1200%2C675",
      publishedAt: "2023-05-20T02:13:49Z",
      content:
        "Ukraines President Volodymyr Zelenskyy has welcomed United States President Joe Bidens decision to support the training of Ukrainian pilots on US-made F-16 fighter jets, saying it would greatly enhan… [+4174 chars]",
    },
    {
      source: { id: null, name: "San Francisco Chronicle" },
      author: "Aidin Vaziri",
      title:
        "Jay-Z and Beyoncé purchase most expensive home in California history - San Francisco Chronicle",
      description:
        "The musical power couple reportedly paid $200 million for the property in Malibu, surpassing the previous record set by a $177 million sale.",
      url: "https://www.sfchronicle.com/california/article/jay-z-beyonce-purchase-expensive-home-california-18109651.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/32/76/04/23847205/3/rawImage.jpg",
      publishedAt: "2023-05-20T02:12:09Z",
      content:
        "Beyoncé and Jay-Z have shattered Californias real estate price record with the purchase of a sprawling 40,000-square-foot mansion that overlooks the Pacific Ocean. The musical power couple reportedly… [+1329 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "White House, Republican team say no progress in debt ceiling talks - Reuters",
      description:
        "A second meeting on Friday between White House and Republican congressional negotiators on raising the federal government's $31.4 trillion debt ceiling broke up with no progress cited by either side and no additional meeting set.",
      url: "https://www.reuters.com/world/us/us-debt-ceiling-talks-paused-punchbowl-reporter-2023-05-19/",
      urlToImage:
        "https://www.reuters.com/resizer/R13L8E1EMBdPtp2qltT9_LmP0iY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/V6ZEPDPEPBNSLLBICN7E3VLJJI.jpg",
      publishedAt: "2023-05-20T02:09:00Z",
      content:
        "WASHINGTON, May 19 (Reuters) - A second meeting on Friday between White House and Republican congressional negotiators on raising the federal government's $31.4 trillion debt ceiling broke up with no… [+4730 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jack Forrest",
      title:
        "Nebraska legislature passes bill to restrict abortions at 12 weeks, gender-affirming care for those under 19 - CNN",
      description:
        "A Nebraska bill combining a ban on most abortions after 12 weeks and restrictions on gender-affirming care for transgender Nebraskans under 19 is poised to become law after the state’s unicameral legislature voted for its passage Friday.",
      url: "https://www.cnn.com/2023/05/19/politics/nebraska-abortion-gender-affirming-care/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230519151019-01-nebraska-abortion-gender-afirming-care.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-20T02:08:00Z",
      content:
        "A Nebraska bill combining a ban on most abortions after 12 weeks and restrictions on gender-affirming care for transgender Nebraskans under 19 is poised to become law after the states unicameral legi… [+4880 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Jeff Bezos' Blue Origin wins NASA contract to build astronaut lunar lander spacecraft - The Sun",
      description:
        "A team led by Jeff Bezos' space company Blue Origin won a coveted NASA contract to build a spacecraft that will send astronauts to and from the moon's surfac...",
      url: "https://www.youtube.com/watch?v=Jh6oFAojnBo",
      urlToImage: "https://i.ytimg.com/vi/Jh6oFAojnBo/maxresdefault.jpg",
      publishedAt: "2023-05-20T01:00:11Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Controversy surrounding Dodgers Pride Night continues to mount - KCAL News",
      description:
        "Jasmine Viel provides the latest in the ongoing controversy surrounding Dodgers Pride Night, after the organization opted to rescind an invitation from an LG...",
      url: "https://www.youtube.com/watch?v=xaWWlF5prgM",
      urlToImage: "https://i.ytimg.com/vi/xaWWlF5prgM/maxresdefault.jpg",
      publishedAt: "2023-05-20T00:34:17Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Hyundai and Kia settle class action suit over anti-theft technology - NBC News",
      description:
        "The automakers agreed to pay up to $200 million to settle a class action lawsuit covering roughly 8 million vehicles. The suit claims Hyundai and Kia failed ...",
      url: "https://www.youtube.com/watch?v=BnRdLPaTs00",
      urlToImage: "https://i.ytimg.com/vi/BnRdLPaTs00/maxresdefault.jpg",
      publishedAt: "2023-05-20T00:00:04Z",
      content: null,
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        "Jim Brown, legendary NFL running back, civil rights activist and actor, dies at 87 - CBS News",
      description:
        "Brown led the Cleveland Browns to their last NFL title in 1964 before retiring in his prime after the '65 season to become an actor.",
      url: "https://www.cbsnews.com/news/jim-brown-dies-nfl-running-back-dies-dead-age-87/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/19/8f743980-48f4-4c21-bd82-baf80755e8ed/thumbnail/1200x630/3c4d81ff9f09f8e8dcde17dd2fb07d85/ap23139659097370.jpg",
      publishedAt: "2023-05-19T23:55:00Z",
      content:
        "Pro Football Hall of Famer Jim Brown, the unstoppable running back who retired at the peak of his brilliant career to become an actor as well as a prominent civil rights advocate during the 1960s, ha… [+4366 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Jonny Hallam,Tara John",
      title:
        "Moscow bans ‘500 Americans’ from Russia including CNN journalists - CNN",
      description:
        "Former United States President Barack Obama, late night television host Stephen Colbert, and CNN’s Erin Burnett are some of the “500 Americans” Russia has banned from entering the country.",
      url: "https://www.cnn.com/2023/05/19/europe/russia-bans-american-citizens-obama-intl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230519160328-burnett-colbert-obama-walsh-split.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-19T23:49:00Z",
      content:
        "Former United States President Barack Obama, late night television host Stephen Colbert, and CNNs Erin Burnett are some of the 500 Americans Russia has banned from entering the country. \r\nRussia on F… [+2129 chars]",
    },
    {
      source: { id: null, name: "Push Square" },
      author: "Sammy Barker",
      title:
        "Mortal Kombat 1's PS5 Kombat Pack Kontents May Have Been Accidentally Outed - Push Square",
      description: "Get a load of this",
      url: "https://www.pushsquare.com/news/2023/05/mortal-kombat-1s-ps5-kombat-pack-kontents-may-have-been-accidentally-outed",
      urlToImage: "https://images.pushsquare.com/e80add5abe201/1280x720.jpg",
      publishedAt: "2023-05-19T23:15:00Z",
      content:
        "Image: Push Square\r\nThe kontents of Mortal Kombat 1s first DLC Kombat Pack may have been accidentally outed by Amazon Italy. The retailer went live earlier today with a list of six playable character… [+1011 chars]",
    },
    {
      source: { id: null, name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Syria: Dismay and fear as Bashar al-Assad returns to Arab fold - BBC",
      description:
        "Syrian's President Bashar al-Assad is coming out of diplomatic isolation - to the terror of refugees.",
      url: "https://www.bbc.com/news/world-middle-east-65650768",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/1580E/production/_129787088_gettyimages-1487582922.jpg",
      publishedAt: "2023-05-19T23:10:51Z",
      content:
        "President Bashar al-Assad strode into the Arab League summit in Jeddah, relishing the clearest recognition yet that he has won his war for Syria. \r\nHe was embraced by the Saudi Crown Prince Mohammed … [+5278 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Florida Gov. Ron Desantis might announce run for White House next week - FOX 26 Houston",
      description: null,
      url: "https://www.youtube.com/watch?v=iYxCOLaKqaM",
      urlToImage: null,
      publishedAt: "2023-05-19T22:52:48Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  ///---This is for fetch API to use in local programm-----------------///
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }
  ///-----------------------------------------------------------------///

  handleNext = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });

    this.setState({
      page: this.state.page + 1,
    });
  };

  handlePrev = async () => {
    console.log("Prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d71fc34bdbc74a1f8b13390bbda8127f&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });

    this.setState({
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <>
        <div className="marBar">
          <marquee className='LiveCap'>Live Now !!!     Live Now !!!      Live Now !!! </marquee>
        </div>
        <div className="container  my-3 text-center">
          <h1 className="text-center my-5">The New India - Top Headlines</h1>
          <div className="row text-center">
            {this.state.articles.map((e) => {
              return (
                <div className="col-md-4" key={e.url}>
                  <NewsItime
                    title={e.title.slice(0,30)}
                    description={e.description?.slice(0, 45)}
                    imgUrl={e.urlToImage}
                    NewsUrl={e.url}
                    author={e.author}
                    date = {e.publishedAt}
                  />
                </div>
              );
            })}
          </div>

          <div className="container my-5 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-secondary btn-dark"
              onClick={this.handlePrev}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-dark"
              onClick={this.handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
