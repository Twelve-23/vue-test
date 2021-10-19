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
				for (const period of state.data.periods) {
					if (period.itemized) {
						for (const orderId in period.itemized) {
							if (Object.hasOwnProperty.call(period.itemized, orderId)) {
								const orderSummary = period.itemized[orderId];
								console.log("😎 ~ file: index.js ~ line 21 ~ orderSummary", (orderSummary.orders > 20) ? 'true' : 'false')
								if (orderSummary.orders > 20) {
									console.log('here')
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