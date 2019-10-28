<template>
  <div class="q-pa-md row items-start q-gutter-md hover-menu">
    <q-btn @click="closeMenu()" >X </q-btn>
    <q-card class="my-card">
      <q-img
            src="statics/salesforce.png"
            style="max-width: 200px;"
            class="img"
        >
        </q-img>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img
            src="statics/SAP.png"
            style="max-width: 200px;"
            class="img"
        >
        </q-img>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img
            src="statics/kissflow_horizon.png"
            style="max-width: 200px;"
            class="img"
        >
        </q-img>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <q-img
            src="statics/ZOHO.png"
            style="max-width: 200px;"
            class="img"
        >
        </q-img>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-img
            src="statics/aws.png"
            style="max-width: 200px;"
            class="img"
        >
        </q-img>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'MenuOnHover',
  data () {
    return {}
  },
  methods: {
    closeMenu () {
      this.$emit('closeMenu')
    }
  }
}
</script>

<style>
  .img{
    margin-left: 10%;
  }

.my-card{
  width: 100%;
  max-width: 250px;
  }
  .hover-menu {
      width: 100%;
      position: fixed;
      top : 1px;
      background: white;
      z-index:9999;
  }
</style>
