import * as QtuminfoAPI from '@/services/qtuminfo-api'

class Misc {
  static richList({from, to}) {
    return QtuminfoAPI.get(`/misc/rich-list`, {params: {from, to}})
  }
}

export default Misc
