import React from "react";

import i1 from "../images/i1.png";
import i21 from "../images/i21.png";
import i2 from "../images/i2.png";
import i3 from "../images/i3.png";
import i4 from "../images/i4.png";
import i5 from "../images/i5.png";
import i6 from "../images/i6.png";
import i7 from "../images/i7.png";
import i8 from "../images/i8.png";
import i9 from "../images/i9.png";
import i10 from "../images/i10.png";
import i11 from "../images/i11.png";

const Imports = (props) => {
  return (
    <div id="write" class="is-node">
      <h2>
        <a name="imports" class="md-header-anchor"></a>
        <span>Imports</span>
      </h2>
      <h3>
        <a name="media-focused" class="md-header-anchor"></a>
        <span>Media-Focused </span>
      </h3>
      <p>
        <img
          src={i1}
          referrerpolicy="no-referrer"
          alt="image-20200521220353610"
        />
      </p>
      <p>
        <span>
          The media player used by AntennaPod is the standard Android Media
          Player. This is used for the actual playback of the podcast episodes.
          It is a library that works for playing many types of audio files. Its
          life cycle is described in the Android developer page.
        </span>
      </p>
      <p>
        <span> </span>
        <img
          src="https://developer.android.com/images/mediaplayer_state_diagram.gif"
          referrerpolicy="no-referrer"
          alt="MediaPlayer State diagram"
        />
      </p>
      <p>
        <span>This is all managed inside the </span>
        <img
          src={i21}
          referrerpolicy="no-referrer"
          alt="image-20200521222602107"
        />
        <span>
          package, where all the media player features are stored. This includes
          methods like
        </span>
      </p>
      <p>
        <img
          src={i2}
          referrerpolicy="no-referrer"
          alt="image-20200521222742159"
        />
      </p>
      <p>
        <span>
          which is is in charge of giving the user the ability to skip the
          introduction, which we found to be a very nice featuyre to have, as
          this makes much more seamless the listening experience. This method
          uses some of the MediaPlayer lifecycle methods like seek() which is
          the method in charge of skipping ahead to different parts of the audio
          file.
        </span>
      </p>
      <p>&nbsp;</p>
      <p>
        <img
          src={i3}
          referrerpolicy="no-referrer"
          alt="image-20200521225555783"
        />
      </p>
      <p>
        <span>
          These methods are the other helper methods that interact with the
          MediaPlayer import.
        </span>
      </p>
      <h3>
        <a name="cache-strategies" class="md-header-anchor"></a>
        <span>Cache Strategies</span>
      </h3>
      <p>
        <span>
          We found the import in charge of dealing with the cache storage of
          Media files
        </span>
        <img
          src={i4}
          referrerpolicy="no-referrer"
          alt="image-20200521231509334"
        />
        <span> </span>
      </p>
      <p>
        <span>
          It uses smart strategies in order to decode and encode the media files
          and keep the storage use as small as possible. Some of those
          strategies include AUTOMATIC, DATA, NONE and RESOURCE. DATA writes
          retireved data directly to the kis cache beofre its decoded, RESOURCE
          writes resources to disk after they&#39;ve been decoded.
        </span>
      </p>
      <p>
        <img
          src={i5}
          referrerpolicy="no-referrer"
          alt="image-20200521232127100"
        />
      </p>
      <p>
        <span>
          AntennaPod uses the NONE strategy, which means that no data is saved
          to Cache.
        </span>
      </p>
      <h3>
        <a name="searchhit" class="md-header-anchor"></a>
        <span>SearchHit</span>
      </h3>
      <p>
        <span>
          We found a very interesting Import. The search engine for Antennapod
          is{" "}
        </span>
        <img
          src={i6}
          referrerpolicy="no-referrer"
          alt="image-20200521232520479"
        />
        <span>
          , a library from elastic search which helps to find a new podcast. It
          searches athe podcast from the FyydClient, which from what we
          understood of the application,{" "}
        </span>
        <img
          src={i7}
          referrerpolicy="no-referrer"
          alt="image-20200521233022978"
        />
      </p>
      <p>
        <span>
          It is a httpClient which searches based on a String query and returns
          the result in a PodcastSearchResult object, which contains the
          following:
        </span>
      </p>
      <p>
        <img
          src={i8}
          referrerpolicy="no-referrer"
          alt="image-20200521233203141"
        />
      </p>
      <p>
        <span>
          Where feedUrl is the page containing the podcast episodes information.
        </span>
      </p>
      <p>
        <span>As an example, here is the method for looking up in iTunes,</span>
      </p>
      <p>
        <img
          src={i9}
          referrerpolicy="no-referrer"
          alt="image-20200521233411681"
        />
      </p>
      <p>
        <span>It searches from a constant URL &quot;</span>
        <a
          href="http://itunes.apple.com/lookup?id="
          target="_blank"
          class="url"
        >
          http://itunes.apple.com/lookup?id=
        </a>
        <span>
          &quot; and searches based on the json object passed as parameters. We
          found it a pleasant surprise to see elastic search being used for such
          an application, showing that they are using innovative technologies in
          order to improve the app experience.
        </span>
      </p>
      <h3>
        <a name="document-file-exporter" class="md-header-anchor"></a>
        <span>Document File Exporter</span>
      </h3>
      <p>
        <span>
          Once it finds the URL that i wants to download the podcast episode, it
          must download it in some way. Thats when{" "}
        </span>
        <img
          src={i10}
          referrerpolicy="no-referrer"
          alt="image-20200521235140773"
        />
        <span>
          comes into play, the library writes an OPML file into the user
          selected export directory in the background.
        </span>
      </p>
      <p>
        <img
          src={i11}
          referrerpolicy="no-referrer"
          alt="image-20200521235740001"
        />
      </p>
      <p>
        <span>
          In that method it tries to download the file from the uri in the
          DocumentFile.fromSingleUri object, which is the object passed down
          when you enter a URL to download a podcast from. It does the necessary
          checks and then it calls the exportWriter and sends the file to the
          context.
        </span>
      </p>
    </div>
  );
};

export default Imports;
