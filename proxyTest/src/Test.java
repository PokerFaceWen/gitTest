public class Test {
    public static void main(String[] args) {
        Baby baby = new Baby();
        baby.proxy = new Nanny();
        baby.cry();
        baby.hunger();
    }
}
