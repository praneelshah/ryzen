import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollShowcase() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold text-foreground mb-8">
              About <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-text bg-clip-text text-transparent">
                Ryzen Technologies
              </span>
            </h2>
          </>
        }
      >
        <div className="mx-auto rounded-2xl h-full w-full p-8 md:p-12 bg-black flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-lg md:text-2xl text-foreground/90 leading-relaxed max-w-4xl">
            At RYZEN TECH, we specialize in delivering cutting-edge solutions for Customer Relationship Management (CRMs), mobile and web applications, and RFID-powered hardware technologies.
          </p>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-4xl">
            Our mission is to empower businesses with innovative technology tailored to their unique needs. We combine technical expertise with creative solutions to help your business thrive in the digital age.
          </p>
        </div>
      </ContainerScroll>
    </div>
  );
}
