import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
  propTop1?: CSSProperties["top"];
  propBottom1?: CSSProperties["bottom"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  propPadding,
  propTop,
  propBottom,
  propTop1,
  propBottom1,
}) => {
  const connectMediaIconsGroupStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const placeToInfoBoxStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  const placeToInfoBox1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      bottom: propBottom1,
    };
  }, [propTop1, propBottom1]);

  return (
    <div
      className={styles.connectMediaIconsGroup}
      style={connectMediaIconsGroupStyle}
    >
      <div className={styles.oct}>
        <div className={styles.chatgptIcon}>
          <div className={styles.list}>
            <div className={styles.phoneNumberField}>
              <img
                className={styles.iconsPhone}
                loading="eager"
                alt=""
                src="/iconsphone.svg"
              />
              <div className={styles.callToUs}>Call To Us</div>
            </div>
            <div className={styles.oct1}>
              <div className={styles.weAreAvailable}>
                We are available 24/7, 7 days a week.
              </div>
              <div className={styles.phone9779812397390}>
                Phone: +977-9812397390
              </div>
            </div>
          </div>
          <img
            className={styles.underlineIcon}
            loading="eager"
            alt=""
            src="/underline.svg"
          />
          <div className={styles.userPersonasResearch}>
            <div className={styles.userPersonaResearchIsAPro}>
              <img
                className={styles.iconsMail}
                loading="eager"
                alt=""
                src="/iconsmail.svg"
              />
              <div className={styles.writeToUs}>Write To US</div>
            </div>
            <div className={styles.list1}>
              <div className={styles.fillOutOur}>
                Fill out our form and we will contact you within 24 hours.
              </div>
              <div className={styles.emailsCustomerkaamsewacom}>
                Emails: customer@kaamsewa.com
              </div>
              <div className={styles.emailsSupportkaamsewacom}>
                Emails: support@kaamsewa.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.thu}>
        <div className={styles.list2}>
          <div className={styles.placeboxInfo}>
            <div
              className={styles.placeToInfoBox}
              style={placeToInfoBoxStyle}
            />
            <input
              className={styles.md}
              placeholder="Your Name *"
              type="text"
            />
          </div>
          <div className={styles.placeboxInfo1}>
            <div className={styles.placeToInfoBox1} />
            <input
              className={styles.md1}
              placeholder="Your Email *"
              type="text"
            />
          </div>
          <div className={styles.placeboxInfo2}>
            <div
              className={styles.placeToInfoBox2}
              style={placeToInfoBox1Style}
            />
            <input
              className={styles.md2}
              placeholder="Your Phone *"
              type="text"
            />
          </div>
        </div>
        <div className={styles.placeboxInfo3}>
          <div className={styles.placeToInfoBox3} />
          <div className={styles.md3}>Your Massage</div>
        </div>
        <div className={styles.buttonInstance}>
          <button className={styles.button}>
            <div className={styles.viewAllProducts}>Send Massage</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;