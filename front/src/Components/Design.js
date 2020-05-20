import React from "react";

import d1 from "../images/d1.png";
import d2 from "../images/d2.png";
import d3 from "../images/d3.png";
import d4 from "../images/d4.png";
import d5 from "../images/d5.png";
import d6 from "../images/d6.png";
import d7 from "../images/d7.png";
import d8 from "../images/d8.png";
import d9 from "../images/d9.png";
import d10 from "../images/d10.png";

const Design = () => {
  return (
    <div id="write" class="is-node">
      <h2>
        <a name="design" class="md-header-anchor"></a>
        <span>Design</span>
      </h2>
      <h3>
        <a
          name="how-is-antennapod-structured-and-what-have-been-the-design-decisions"
          class="md-header-anchor"
        ></a>
        <span>
          How is Antennapod structured and what have been the design decisions?
        </span>
      </h3>
      <p>
        <span>
          To better understand the design decisions behind Antennapod, we have
          chosen the five most important pages and de-structured them,
          understanding the design from a UI perspective as well as from the
          point of view of the code.
        </span>
      </p>
      <h3>
        <a name="episode-view" class="md-header-anchor"></a>
        <span>Episode View</span>
      </h3>
      <p>
        <img
          src={d1}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </p>
      <p>
        <span>
          Once you have subscribed to one or more podcasts, the app launches
          automatically to the Episodes View. Here we can see a design component
          that we found repeated numerous times throughout the application. The
          superior Toolbar, with the &#39;New&#39;, &#39;All&#39;, and
          &#39;Favourites&#39;. It is very simple, but it has no defining
          features, and as it is repeated a number of times, we found it to be
          hard to automatically know in what part of the app we were in.
        </span>
      </p>
      <p>
        <img
          src={d2}
          alt="image-20200519084807692"
          style={{ height: "200px" }}
        />
      </p>
      <p>
        <span>
          The bottom part of the view is a RecycleView called on the onCreate of
          the MainActivity as a recycledViewPool that holds a maximum of 25
          elements. The card holds the name of the episode, the date it was
          puiblished and the runtime of the episode. On the right it has a
          button to download the episode. However if you tap a cared, it
          forwards yo to this screen
        </span>
      </p>
      <p>
        <img
          src={d3}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </p>
      <p>
        <span>
          Where it once more prompts you to download or stream the episode. We
          believe that the application should send you automatically to the
          streaming screen and that inside the streaming window, you should have
          the option to download. The card should, instead of the option to
          download, the button to see the description of the episode.
        </span>
      </p>
      <p>
        <img
          src={d4}
          alt="image-20200519084807692"
          style={{ height: "100px" }}
        />
      </p>
      <p>
        <span>
          That would avoid unnecesary taps that slows down the flow of the
          application. Besides, from a business and contextual point of view,
          there shouldn&#39;t be so much focus in the description page of the
          episode, since that isn&#39;t the focus of the channels, we found out
          that many podcast shows have empty descriptions,
        </span>
      </p>
      <p>
        <img
          src={d5}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </p>
      <p>
        <span>
          Leaving the app looking empty. If instead of this, it could focus more
          on the actual episode, it could become a much more rich and intuitive
          experience. We drew comparissons with Spotify and found that spotify
          has a very clean and intuitive way of displaying additional
          information about the song or podcast episode that is playing:
        </span>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={d6}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
        <img
          src={d7}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
        <img
          src={d8}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </div>

      <p>
        <span>
          They put the descriptive content of the song, in a draggable display
          below. This is very useful as it becomes a centralized interface for
          all of the song&#39;s information.
        </span>
      </p>
      <h3>
        <a name="subscription-view" class="md-header-anchor"></a>
        <span>Subscription View</span>
      </h3>
      <p>
        <span>
          When you enter your subscriptions you enter to this view of all the
          podcasts that you have subscribed to. We feel that unless you are
          subscribed to more than 9 shows, this view will look very empty and be
          very uninviting, we would suggest to dynamically change the size of
          the columns depending on the amount of subscribed shows.
        </span>
      </p>
      <p>
        <img
          src={d9}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </p>
      <p>&nbsp;</p>
      <p>
        <span>
          Furthermore, we found that when you are in the opposite scenario, (you
          have a lot of subscriptions), there is no way of filtering or
          searching through your subscriptions, making the interface incredibly
          cluttered all the time. SImilarly, many users may not know by memory
          the thumbnail of one of the shows that they are subscribed to but want
          to listen. They should use a card based recycledView, where it shows
          more clearly the name of the episode and the number of the episode, in
          order to avoid putting the small tag in the top right of every
          thumbnail.
        </span>
      </p>
      <h3>
        <a name="add-podcast-view" class="md-header-anchor"></a>
        <span>Add Podcast View</span>
      </h3>
      <p>
        <span>
          The first page that you see if you open the app for the first time, or
          if you have no subscriptions is the Add Podcast View
        </span>
      </p>
      <p>
        <img
          src={d10}
          alt="image-20200519084807692"
          style={{ height: "500px" }}
        />
      </p>
      <p>
        <span>
          This is by far the best looking page of the app. We found it uses
          appropiately the space. The card layout really suits this type of
          interface, where every card is a very different functionality.
          However, we felt a little lost in this page, we feel that there should
          be more tooltips that give me a little bit more information on some
          features, like OPML Import. As a non-technical user, I would be
          intimidated by OPML and URL. It feels like it is targeted at people
          really familiar with podcasts and that know that you can search a
          podcast from an URL and bring it tio the app. Testing this app i was
          legitimately confused on what URL i would need to put there in order
          to bring a podcast. Nonetheless, we do feel like it is the best
          interface of the app.
        </span>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
};

export default Design;
