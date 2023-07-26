<template>
  <v-app>
    <v-row
      align="start"
      justify="center"
      class="pa-3 ma-0 w-full"
      dense
      no-gutters
    >
      <v-col cols="12" md="8">
        <v-card
          outlined
          rounded="0"
          v-if="Object.keys(bookingDetail).length !== 0"
          style="min-height: 100vh"
          class="w-full pa-4"
        >
          <v-row class="ma-0 pa-0 w-full" dense no-gutters>
            <v-col cols="12">
              <div class="d-flex flex-column align-end w-full">
                <span
                  @click="onClickPrint"
                  class="primary--text pa-2"
                  style="cursor: pointer"
                  >Print Out</span
                >
              </div>
            </v-col>
          </v-row>
          <v-row class="ma-0 pa-0 w-full" dense no-gutters>
            <v-col cols="12">
              <div class="d-flex flex-column align-center w-full">
                <img
                  style="width: 100px"
                  src="@/assets/logo-silverseaexpress.png"
                  alt=""
                />
              </div>
            </v-col>
          </v-row>
          <v-row class="ma-0 mt-4 pa-0 w-full" dense no-gutters>
            <v-col cols="6">
              <div class="d-flex flex-column w-full">
                <span class="text-h6">{{ bookingDetail.blNumber }}</span>
                <span class="text-caption grey--text mt-1"
                  >Bills of lading no</span
                >
              </div>
            </v-col>
            <v-col cols="6">
              <div class="d-flex flex-column align-end w-full">
                <span class="text-h6">{{ bookingDetail.bookingNumber }}</span>
                <span class="text-caption grey--text mt-1">Booking No</span>
              </div>
            </v-col>
          </v-row>
          <v-divider class="mt-4"></v-divider>
          <v-row class="ma-0 mt-4 w-full" dense no-gutters>
            <v-col cols="12">
              <span class="text-h6">Shipment Information</span>
              <v-simple-table class="mt-4">
                <template v-slot:default>
                  <thead class="blue">
                    <tr>
                      <th class="text-left white--text">Estimate Departure</th>
                      <th class="white--text">Port Of Loading</th>
                      <th class="white--text">Estimate Arival</th>
                      <th class="white--text">Port Of Discharge</th>
                      <th class="text-right white--text">Transhipment Port</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="bookingDetail.shipments.length === 0">
                      <td colspan="6">
                        <div
                          class="w-full d-flex justify-center flex-column align-center"
                        >
                          <span>Data not found.</span>
                        </div>
                      </td>
                    </tr>
                    <tr
                      v-for="(item, index) in bookingDetail.shipments"
                      :key="index"
                    >
                      <td class="text-left">
                        {{
                          helpers.dateShortFormat(item.estimateDepartureDate)
                        }}
                      </td>
                      <td>{{ item.portLoading }}</td>
                      <td>
                        {{ helpers.dateShortFormat(item.estimateArivalDate) }}
                      </td>
                      <td>{{ item.portDischarge }}</td>
                      <td class="text-right">{{ item.transhipmentPort }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider class="mt-4"></v-divider>
            </v-col>
          </v-row>
          <v-row class="ma-0 w-full" dense no-gutters>
            <v-col cols="12 pa-2">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="blue">
                    <tr>
                      <th class="text-left white--text">Departure</th>
                      <th class="white--text">Arival</th>
                      <th class="white--text">Vessel</th>
                      <th class="text-right white--text">Voyage No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="bookingDetail.shipments.length === 0">
                      <td colspan="6">
                        <div
                          class="w-full d-flex justify-center flex-column align-center"
                        >
                          <span>Data not found.</span>
                        </div>
                      </td>
                    </tr>
                    <tr
                      v-for="(item, index) in bookingDetail.shipments"
                      v-if="item.transhipmentPort === 'DIRECT'"
                      :key="index"
                    >
                      <td class="text-left">
                        {{ helpers.dateShortFormat(item.departureDate) }}
                      </td>
                      <td>{{ helpers.dateShortFormat(item.arivalDate) }}</td>
                      <td>{{ item.vesselName }}</td>
                      <td class="text-right">{{ item.voyageNumber }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider class="mt-4"></v-divider>
            </v-col>
          </v-row>
          <v-row class="ma-0 w-full" dense no-gutters>
            <v-col cols="12 pa-2">
              <span class="text-h6">Container Details</span>
              <v-simple-table class="mt-4">
                <template v-slot:default>
                  <thead class="blue">
                    <tr>
                      <th class="text-left white--text">Container No</th>
                      <th class="white--text">Seal No</th>
                      <th class="white--text">Size</th>
                      <th class="white--text">Description Of Goods</th>
                      <th class="text-right white--text">Empty Out</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="bookingDetail.containers.length === 0">
                      <td colspan="6">
                        <div
                          class="w-full d-flex justify-center flex-column align-center"
                        >
                          <span>Data not found.</span>
                        </div>
                      </td>
                    </tr>
                    <tr
                      v-for="(item, index) in bookingDetail.containers"
                      :key="index"
                    >
                      <td class="text-left">
                        {{ item.containerNumber }}
                      </td>
                      <td>{{ item.sealNumber }}</td>
                      <td>{{ item.volume }}</td>
                      <td>{{ item.descriptionOfGoods }}</td>
                      <td class="text-right">{{ item.weight }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { BookingApi } from "~/api/booking.api";
import { Helpers } from "~/plugins/helpers";
import { BookingInterface } from "~/types/interface";
export default {
  async asyncData(context: Context) {
    const bookingApi = new BookingApi();

    const fetchTracking = async () => {
      try {
        const response = await bookingApi.getTracking(context.route.params.id);
        if (response.data.status !== "SUCCESS") {
          alert(response.data.message);
          return;
        }
        return response.data.data;
      } catch (error: any) {
        const errorMessage = error.response
          ? error.response.message
          : "System Error, please contact our team";
        alert(errorMessage);
      }
    };

    let bookingDetail: BookingInterface = await fetchTracking();

    return {
      bookingDetail,
    };
  },
  data() {
    return {
      helpers: new Helpers(),
    };
  },
  methods: {
    async onClickPrint() {
      try {
        const response = await new BookingApi().getPrint(this.$route.params.id);
        if (response.data.status !== "SUCCESS") {
          alert(response.data.message);
          return;
        }
        console.log(response);
      } catch (error: any) {
        const errorMessage = error.response
          ? error.response.message
          : "System Error, please contact our team";
        alert(errorMessage);
      }
    },
  },
};
</script>
