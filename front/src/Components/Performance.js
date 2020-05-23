import React from "react";

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";

const Performance = (props) => {
  return (
    <div id="write" class="is-node">
      <h2>
        <a name="performance" class="md-header-anchor"></a>
        <span>Performance</span>
      </h2>
      <p>
        <h3>
          <span>Opened the app, browsing</span>
        </h3>
      </p>
      <p>
        <img
          src={p1}
          referrerpolicy="no-referrer"
          alt="image-20200522011835598"
        />
      </p>
      <p>
        <span>
          This is the profiling result when we opened the app and browsed
          through all the screens. We can see that opening the app consumed an
          initial burst of network, however, as we didnt enter any view that
          required internet from there on, the netwrok consumption went to zero.
          This shows us that the application isnt doing constant background
          fetches or anything that would consume more bandwidth than necessary.
          On the other hand, we can see how everytime that you open a new view,
          there is a small spike in cpu consumption. This is normal and to be
          expected.
        </span>
      </p>
      <p>
        <h3>
          <span>One stream</span>
        </h3>
      </p>
      <p>
        <img
          src={p2}
          referrerpolicy="no-referrer"
          alt="image-20200522011723114"
        />
      </p>
      <p>
        <span>
          For this test, we started streaming an episode and started skipping
          and rewinding at random intervals. And this is completely evident in
          network use. As every time i skipped to a different location, it would
          buffer a good chuink of the content to come, thats whiy that
          consumption doesnt stay constant. It bufferes as much as it can and
          then sttops consuming bansdwidth. However, every time we skipped ahead
          or behind, as the application lacks good Caching strategies, it must
          fetch the information. The cpu consumption is relatively stable but
          much more active on this test than on the previous one, and it makes
          sense since it is streaming high quality audio.
        </span>
      </p>
      <p>
        <h3>
          <span>Many downloads</span>
        </h3>
      </p>
      <p>
        <img
          src={p3}
          referrerpolicy="no-referrer"
          alt="image-20200522011650318"
        />
      </p>
      <p>
        <span>
          For this test we went to the episodes view and downloaded twenty
          episodes at the same time. It is noticeable the increased consumption
          of network and CPU. Energy use also increased and became much more
          stable than in other tests.
        </span>
      </p>
      <p>
        <span>
          One thing that we found interesting is the top notch memory management
          system of the application. It is very stable in theri memory
          consumptions. However, when the app was idly browsing through
          different screens, the memory consumption should be lower than 250Mb,
          however it is very stable and it managed an intense power load without
          any hiccups.
        </span>
      </p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  );
};

export default Performance;
