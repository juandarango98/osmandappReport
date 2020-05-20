import React from "react";
import "./EC.css";

import ec1 from "../images/ec1.png";
import ec2 from "../images/ec1.png";
import ec3 from "../images/ec1.png";
import ec4 from "../images/ec1.png";
import ec5 from "../images/ec1.png";
import ec6 from "../images/ec1.png";
import ec7 from "../images/ec1.png";

const ConnectualEventivity = (props) => {
  return (
    <div id="write" class="is-node">
      <div>
        <h2>Eventual Connectivity</h2>
        <h3>
          How does Antennapod handle intermittent, or poor qualiaty netwrok
          scenarios?
        </h3>
        <p>
          Eventual connectivity is a very critical issue, that when implemented
          wrongly, will lead to unusability, poor performance, and will decrease
          the overall user experience of the application. We found several
          antipatterns through out Antennapod, and we have decided to contrast
          these antipaterns, to some good design patterns that we found in
          different other applications in order to properly convey the
          differences in user experience that a good Eventual Connectivity
          management provides is huge.
        </p>
      </div>
      <h3>Non-informative message</h3>
      <p>
        We found numerous instances of Non-informattive message anti pattern
        within Antennapod. This is when the user has lost connectiity, and the
        application sends unfriendly and cryptic messeages, snackbars and popups
        to the non-technical user. We drew some similes with the analogous apps,
        like Google Podcasat and Spotify, to understand where Antennapod coudl
        improve and be able to pin down their erred behavior more easily.
      </p>
      <p>
        <span>
          We disabled internet and booted the application for the first time and
          we were welcomed by the following screen.
        </span>
      </p>
      <p>
        <img src={ec1} alt="image-20200519084807692" style={{ zoom: "50%" }} />
      </p>
      <p>
        <span>
          For a non-technical user who happened to open this application on the
          precise moment that he disconnected, seeing the message &quot;Unable
          to resolve host&quot; is extremely intimidating and will lead to
          thinking that the entire application is broken, and will reduce the
          perceived quality of the app. If we contrast this with Google Podcast,
          when we open for the first time the application with no internet, the
          following screen welcomes the user
        </span>
      </p>
      <p>
        <img src={ec2} alt="image-20200519085339405" style={{ zoom: "50%" }} />
      </p>
      <p>
        <span>
          This is a great example of a good design pattern for managing Eventual
          Connectivty, as it doesnt swarm the user with useless information
          which he doesnt have the access to yet, (due to not having internet).
          It is clear,
        </span>
      </p>
      <p>
        <img src={ec3} alt="image-20200519085707340" style={{ zoom: "50%" }} />
      </p>
      <p>
        <span>
          showing firstly the name of the application very clearly, reminding
          the user in what application he is at, this doesnt happen in the
          Antennapod app. There is no way for a user to know what application
          hes at unless he goes back to the home menu, or opens the opened apps
          drawer. So when an error like &quot;Unresolved host&quot;, it makes
          the whole interface much less amiccable. Secondly (2 in the image) The
          message is crystal clear, announcing that there was an error, that
          this is not expected behavior. Bu instead of giving the technical
          reasons why it failed, it gives contextual information on the error,
          as it states that &quot;Your subscriptions aren&#39;t loading right
          now&quot;. This gives the user information with which he can start to
          understand what could&#39;ve gone wrong. Lastly (3 in the image) A
          snackbar pops up giving the concise reason for the failure, &quot;No
          connection&quot;. in two words it conveyed much more information than
          Antennapod did with their 13 word-long &quot;Unable to resolve host
          &#39;itunes.apple.com&#39; no address associated with hostname&quot;
          error.
        </span>
      </p>
      <p>
        <span>We found numerous instances of this thorugh out the app</span>
      </p>
      <p>
        <img src={ec4} alt="image-20200519091621778" style={{ zoom: "50%" }} />
      </p>
      <p>&nbsp;</p>
      <p>
        <span>
          We believe that that screen is very aesthetic and very clean-looking,
          however it is ruined by that daunting message. Furthermore as that is
          the search screen, and the message is alluding at something not being
          ofund, I could see the possibility of the user thinking that it has
          something to do with the things he is searching for, and gets
          deiscouraged from using the application all together. If we compare
          that search screen with the one from spotify,
        </span>
      </p>
      <p>
        <img src={ec5} alt="image-20200519092454637" style={{ zoom: "50%" }} />
      </p>
      <p>
        <span>
          We can clearly see the differences, spotify pops out a message that
          clearly states that something went wrong, just as with the Google
          podcast example. It first and foremost announces to the user that this
          is not an expected behavior, followed by the small black bar which
          accompanies the user through the app, clearly telling him the cause
          for all the atypical behavior within the app &quot;No internet
          connection&quot;.
        </span>
      </p>
      <p>
        <span>
          Lastly, we found that when you are listening to a podcast via the
          stream feature, if you lose connectivity and skip to a position
          further on in the episode, this message will appear. Another example
          of a non-informative message.
        </span>
      </p>
      <p>
        <img src={ec6} alt="image-20200519095054656" style={{ zoom: "50%" }} />
      </p>
      <h3>Non-existent result notification</h3>
      <p>
        <span>
          Another atypical behavior associated with EC but that is difficult to
          capure in a screen grab is that when we were downloading an episode
          from a podcast, if we were to lose connectivity in the middle of the
          download, no error message would hsow, no announcement of anything,
          but the download would just dissappear from the downloads section.
          This is a clear example of{" "}
        </span>
        <strong>
          <span>
            non-existent notification of problem when performing action
          </span>
        </strong>
        <span>
          and it is really troublesome for the user, because the user might lose
          connection for a split second and will never know that his internet
          connection bleeped neither why his downloads dissappeared. We ran the
          same test in Spotify, where we began downloading a podcast episode and
          turned off the connection.
        </span>
      </p>
      <p>
        <img src={ec7} alt="image-20200519100829576" style={{ zoom: "50%" }} />
      </p>
      <p>
        <span>
          The episode card didnt dissappear, it began showing a spinner where
          the download progress spinner was before, and showed the black bar
          clearly expressing that the weird behavior of the spinner was linked
          to the error being displayed by the bar.
        </span>
      </p>
      <p>&nbsp;</p>
      <p>
        <span>
          From these examples, we found that the key features of what makes a
          good design pattern of EC are:
        </span>
      </p>
      <ul>
        <li>
          <strong>
            <span>
              State as clearly and as quickly as possible that this is not
              typical behavior of your application:
            </span>
          </strong>
          <span> </span>
          <span>
            By telling the user that there is something wrong, the user will no
            longer associate that wrong behavior to the normal workflow of the
            app, if he does associate it. The entire experience of the app will
            be compromised.
          </span>
        </li>
        <li>
          <strong>
            <span>
              It is OK to be persistent when dealing with Eventual Connectivity
            </span>
          </strong>
          <span>
            when dealing with an error that permeates the whole application in
            the way that not having connectivity does, it is better to be
            persistent and tell the user in every screen that the application is
            behaving in unusual ways due to the connectivity error, much like
            Spotify does, where the small black bar follows you through all the
            screens, implicitly telling the user, &quot;All the weird things
            happening right now that you probably dont like, are because of
            me&quot;. In this way, the user will attribute all the frustrating
            behavior to the error, not the app.
          </span>
        </li>
      </ul>
      <p>&nbsp;</p>
    </div>
  );
};

export default ConnectualEventivity;
