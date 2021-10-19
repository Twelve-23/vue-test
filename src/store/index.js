import Vue from 'vue'
import Vuex from 'vuex'

import data from './../../src/assets/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: data
  },
  getters: {
    moreOrders: (state) => {
      if (state.data && state.data.periods) {
        const moreOrders = []
        const lastPeriodIndex = state.data.periods.length - 1
        for (let key = 0; key < lastPeriodIndex; key++) {
          const period = state.data.periods[key]
          if (period.itemized) {
            for (const orderId in period.itemized) {
              if (Object.hasOwnProperty.call(period.itemized, orderId)) {
                const orderSummary = period.itemized[orderId]
                if (orderSummary.orders > 20) {
                  moreOrders.push(orderId)
                }
              }
            }
          }
        }

        return moreOrders
      }

      return []
    }
  }
})

export default store