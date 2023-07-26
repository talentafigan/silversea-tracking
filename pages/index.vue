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
        <v-card outlined rounded="0" class="w-full pa-2">
          <v-row dense no-gutters class="pa-3">
            <v-col>
              <span class="grey--text">Booking No</span>
              <v-text-field
                placeholder="Please input your booking number"
                outlined
                class="mt-4"
                v-model="form.blNumber"
                hide-details="auto"
              ></v-text-field>
              <v-btn
                @click="onClickTracking"
                color="primary"
                class="mt-4"
                :disabled="!form.blNumber"
                block
                >Track</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script lang="ts">
import { BookingApi } from "@/api/booking.api";
import Vue from "vue";
import Component from "vue-class-component";
import { BookingInterface } from "@/types/interface";

@Component
export default class Home extends Vue {
  bookingApi = new BookingApi();
  $helpers: any;
  isLoading = false;

  form = {
    blNumber: null as any,
  };

  $snackbar: any;

  bookingDetail = {} as BookingInterface;

  onClickTracking() {
    if (!this.form.blNumber) return;
    window.location.href = "/" + this.form.blNumber;
  }
}
</script>
