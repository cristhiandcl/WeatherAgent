// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defaultMessage } from "./helpers/defaultMessage";

export const FirstMessageRendering = (
  // planSubscription,
  // generalData,
  iconAlert,
  day,
  month,
  year,
  setChatH
) => {

  const manyBubbles = [
    { value: defaultMessage, isShown: true, type: "bot" },
  ];

  const renderManyBubbles = manyBubbles.filter(
    (bubble) => bubble.isShown && { value: bubble.value, type: bubble.type }
  );

  setChatH(renderManyBubbles);
};
