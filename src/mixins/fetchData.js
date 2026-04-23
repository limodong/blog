export default function (data = null) {
    return {
        data() {
            return {
                isLoading: true,
                data
            }
        },
        async created() {

            this.data = await this.fetchData();
            this.isLoading = false;
            console.log("执行混入的created生命周期", this.data, this.isLoading);

        },
    }
}