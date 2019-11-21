<template>
  <div>
    <b-modal
      :id="data.id"
      ref="deleteButton"
      title="Are sure you want to delete?"
      hide-footer
      no-stacking
    >
      <b-button @click="close()" variant="outline-danger" class="mr-3"
        >Delete</b-button
      >
      <b-button variant="outline-primary" @click="$bvModal.hide(data.id)"
        >Cancel</b-button
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["data"],
  name: "Delete",
  data() {
    return {
      status: "",
      modal: "",
      deleteData: {}
    };
  },
  created() {
    this.page = this.$route.params.page;
  },
  methods: {
    close() {
      this.modal = this.id;
      const obj = {};
      obj._id = this.data.id;
      this.$bvModal.hide(this.data.id);
      this.$emit("event_child", obj);

      // this.$notify({
      //   group: "foo",
      //   type: "success",
      //   title: "Important message",
      //   text: "Data Deleted Successfully",
      //   duration: 1500
      // });
    },
    deleteTostr() {
      if (this.status == 200) {
        this.$toasted.success("Data Deleted Successfully");
      } else {
        this.$toasted.error("Data Deleted Unsuccessfully");
      }
    },
    closeCancelModal() {
      this.hideDeleteModal();
      // this.$root.$emit("bv::hide::modal", this.id.modal);
      // this.$notify({
      //   group: "foo",
      //   type: "error",
      //   title: "Important message",
      //   text: "Data not deleted",
      //   duration: 1500
      // });
    }
  }
};
</script>
<style lang="scss">
.modal-body {
  position: relative;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  text-align: center;
}
</style>
