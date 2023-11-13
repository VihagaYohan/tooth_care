import {COLORS} from '.';
import {normalizeSize} from '../utils/helpers';

const Styles = {
  header: {
    fontSize: normalizeSize(35),
    fontWeight: 'bold',
  },
  body1: {
    fontSize: normalizeSize(28),
    color: COLORS.black,
  },
  flexRow: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
};

export default Styles;
