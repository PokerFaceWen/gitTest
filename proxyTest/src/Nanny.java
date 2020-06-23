public class Nanny implements Proxy{
    @Override
    public void cryListen() {
        System.out.println("保姆哄婴儿");
    }

    @Override
    public void hungerListen() {
        System.out.println("保姆喂婴儿");
    }
}
