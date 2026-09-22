const projects = {
  dcf: {
    eyebrow: "RESEARCH / FEM + AI",
    title: "DCF 성능 예측 및 역설계를 위한 FEM 기반 딥러닝 대리모델",
    html: `
      <img src="assets/dcf_hero.png" alt="DCF representative image" />
      <h3>연구 문제</h3>
      <p>Double Compound Flexure Mechanism(DCF)은 형상 변수와 하중에 따라 변위, 응력, 고유진동수가 함께 변하기 때문에 반복적인 FEM 해석 비용이 큽니다.</p>

      <h3>연구 워크플로우</h3>
      <ul>
        <li>힌지 두께·깊이·길이, 판스프링 간격, 하중을 입력변수로 정의</li>
        <li>Global 250 + Local 100으로 총 350개 FEM 데이터셋 구성</li>
        <li>ANSYS Static Structural / Modal 결과를 학습용 데이터로 구축</li>
        <li>PyTorch 기반 MLP surrogate model 개발 및 Adam + L-BFGS 학습</li>
        <li>SLSQP 최적화를 이용해 목표 변위를 만족하는 형상 역설계 수행</li>
        <li>도출 형상을 FEM 재해석하여 실제 오차 검증</li>
      </ul>

      <div class="modal-grid">
        <img src="assets/dcf_geometry_mesh.png" alt="DCF geometry and mesh" />
        <img src="assets/dcf_parity.png" alt="DCF parity plot" />
      </div>

      <h3>핵심 결과</h3>
      <p>주요 출력 변수에서 높은 예측 성능을 확보했으며, 5개 역설계 케이스의 FEM 재검증 결과 상대오차는 1.90%~3.50% 범위였습니다.</p>

      <h3>역설계 검증 요약</h3>
      <ul>
        <li>ID-1: 2.77%</li>
        <li>ID-2: 2.74%</li>
        <li>ID-3: 2.07%</li>
        <li>ID-4: 3.50%</li>
        <li>ID-5: 1.90%</li>
      </ul>

      <h3>사용 기술</h3>
      <p>ANSYS Workbench · Python · PyTorch · scikit-learn · Pandas · NumPy · SLSQP · FEM Automation</p>
    `
  },
  apriltag: {
    eyebrow: "CONFERENCE / ROBOT VISION",
    title: "카메라 기반 AprilTag 상대거리 추정 및 모바일 로봇 접근 제어 성능 평가",
    html: `
      <img src="assets/apriltag_conference_poster.png" alt="AprilTag mobile robot conference poster" />
      <h3>학회 발표</h3>
      <p>2026 제41회 제어·로봇·시스템학회 학술대회 학부생 논문경진대회에서 발표한 연구입니다. 저자는 정효영, 김대근, 김민영, 조광현이며 영남대학교 로봇공학과 소속으로 등록되었습니다.</p>

      <h3>연구 목적</h3>
      <p>고가의 LiDAR 또는 Depth 카메라 대신 단안 RGB 카메라와 AprilTag를 이용해 전방 객체의 상대거리를 추정하고, 추정 거리를 모바일 로봇의 접근·정지 제어에 활용할 수 있는지 평가했습니다.</p>

      <h3>시스템 구성</h3>
      <ul>
        <li>LIMO Pro 모바일 로봇 + 전방 단안 RGB 카메라</li>
        <li>AprilTag 36H11 / OpenCV 기반 검출</li>
        <li>Pose estimation을 이용한 전방 거리 z_m 계산</li>
        <li>거리 오차 기반 ROS cmd_vel 속도 명령 생성</li>
        <li>Odometry 및 CSV logging으로 주행 결과 기록</li>
      </ul>

      <h3>실험 조건 및 결과</h3>
      <ul>
        <li>정지 상태: 144 frame, 검출률 100.00%</li>
        <li>주행 상태: 80 s 직진, 125 frame, v_x = 0.05 m/s, 검출률 43.20%</li>
        <li>전체 검출률: 73.61%</li>
        <li>평균 상대거리: 0.9465 m / Odometry 주행거리: 1.9576 m</li>
        <li>최종 정지 명령 수행</li>
      </ul>

      <h3>해석</h3>
      <p>정지 상태와 달리 주행 중 AprilTag 검출 안정성이 크게 저하되는 것을 정량적으로 확인했습니다. 포스터에서는 향후 필터링 및 센서 융합을 통한 거리 추정 안정성 개선을 후속 과제로 제시했습니다.</p>

      <h3>사용 기술</h3>
      <p>AprilTag · OpenCV · ROS cmd_vel · LIMO Pro · Monocular RGB Camera · Pose Estimation · Odometry · CSV Logging</p>
    `
  },
  turret: {
    eyebrow: "TRACKING SYSTEM / JOURNAL PAPER · ACCEPTED 2026.09.16",
    title: "소형 이동 객체 대응을 위한 영상 기반 Pan/Tilt 터렛 시스템",
    html: `
      <img src="assets/turret_system.png" alt="RealSense D455 Pan/Tilt tracking hardware" />
      <h3>연구 개요</h3>
      <p>Intel RealSense D455 컬러 영상에서 소형 이동 객체를 검출하고, 검출 중심이 영상 중심을 추종하도록 DYNAMIXEL 2축 Pan/Tilt 시스템을 구현했습니다. 초기 ArUco 단계에서 카메라–모터 연동을 PD 구조로 검증한 뒤, 실제 녹색 풍선 실험에서는 HSV 색상·형상 기반 검출과 P 제어를 사용했습니다.</p>
      <h3>시스템 구성</h3>
      <div class="modal-grid"><img src="assets/turret_architecture.png" alt="Tracking system control architecture" /><img src="assets/turret_tracking_hud.png" alt="Target tracking HUD" /></div>
      <ul><li>Intel RealSense D455 컬러 영상 기반 객체 검출</li><li>ArUco marker로 초기 영상좌표–Pan/Tilt 연동 검증</li><li>최종 실험: HSV + contour-shape 조건으로 녹색 풍선 검출</li><li>P control + EMA smoothing + deadband + per-frame command limit</li><li>DYNAMIXEL 2축 구동 및 Arduino 저출력 레이저 포인터 연동</li></ul>
      <h3>반복 실험 기반 성능 평가</h3>
      <div class="modal-metrics"><div><span>PRIMARY DATASET</span><strong>23 runs</strong></div><div><span>BASELINE ERROR</span><strong>90.70 px</strong></div><div><span>TUNED-A ERROR</span><strong>15.46 px</strong></div><div><span>≤18 px FRAMES</span><strong>19.76% → 78.69%</strong></div></div>
      <p>전체 raw log에 결과값과 무관한 포함·제외 기준을 적용하고 run을 독립 시행 단위로 집계했습니다. Baseline 대비 Tuned-A에서 평균 영상 중심 오차가 크게 감소했으며, 18 px 이내 프레임 비율도 증가했습니다. 다만 여러 운용조건이 함께 변경되었으므로 개별 파라미터의 독립적 인과효과로 해석하지 않았습니다.</p>
      <h3>실시간 구동 검증</h3><video class="modal-video" autoplay muted loop playsinline controls poster="assets/turret_tracking_demo_poster.jpg"><source src="assets/turret_tracking_demo.mp4" type="video/mp4" /></video>
      <h3>Journal Paper</h3><p><strong>「소형 이동 객체 대응을 위한 영상 기반 팬·틸트 터렛 시스템 구현 및 성능 평가」</strong><br>정효영 · 김민영 · 조광현 · 성기정 · 이동연*<br>Journal of the Korea Academia-Industrial Cooperation Society · Accepted 2026.09.16</p>
      <h3>사용 기술</h3><p>Intel RealSense D455 · HSV / Contour Detection · DYNAMIXEL · P / PD Control · EMA · Arduino · Experimental Data Analysis</p>
    `
  },
  helmet: {
    eyebrow: "FLAGSHIP 02 / BALLISTIC REPRODUCTION",
    title: "선행연구 재현 기반 방탄 구조 Explicit Dynamics 충돌해석",
    html: `
      <img src="assets/ballistic_stage5_ours.png" alt="Final reproduced ballistic plate result" />
      <h3>프로젝트 핵심</h3>
      <p>처음부터 정답 모델을 사용한 것이 아니라, 초기 Explicit Dynamics 학습에서 시작해 선행논문의 geometry, projectile, material, velocity 조건을 단계적으로 mimic하고 solver 차이에서 발생한 오류를 해결하며 결과를 재현했습니다.</p>
      <h3>Research Journey</h3>
      <ul>
        <li>초기 helmet / projectile 충돌모델 구성 및 Explicit Dynamics 학습</li>
        <li>선행논문 분석 후 150 × 150 × 6.94 mm plate, 9 mm FMJ 조건 재현</li>
        <li>Autodyn / LS-DYNA 물성치를 ANSYS Explicit 환경에 맞게 변환</li>
        <li>Shock EOS Linear, Johnson–Cook, mesh, time step, erosion 조건 반복 보정</li>
        <li>최종 결과를 논문 실험·수치해석 결과와 직접 비교</li>
      </ul>
      <div class="modal-grid">
        <img src="assets/ballistic_stage2_reference_geometry.png" alt="Reference geometry" />
        <img src="assets/ballistic_stage2_reproduction_setup.png" alt="ANSYS reproduction setup" />
      </div>
      <h3>Final Verification</h3>
      <p>논문 deformation depth: 실험 8.00 mm / numerical 8.79 mm. 최종 ANSYS maximum deformation over time: 약 8.32 mm. 논문 실험값 대비 약 4.0%, numerical 값 대비 약 5.4% 차이로 유사한 수준의 변형응답을 확보했습니다.</p>
      <div class="modal-grid">
        <img src="assets/ballistic_stage5_reference.png" alt="Paper comparison result" />
        <img src="assets/ballistic_stage5_ours.png" alt="ANSYS reproduced result" />
      </div>
      <h3>Helmet Application</h3>
      <img src="assets/ballistic_helmet_result_crop.png" alt="Helmet impact result" />
      <p>plate 기반 재현 과정에서 확보한 충돌해석 workflow를 단순 헬멧 형상으로 확장해 394 m/s 충돌조건을 확인했습니다.</p>
      <h3>사용 기술</h3>
      <p>ANSYS Explicit Dynamics · Literature Reproduction · Shock EOS · Johnson–Cook · Mesh / Time-step Stabilization · Erosion</p>
    `
  },
  rne: {
    eyebrow: "R&E MENTORING / PROTOTYPING / IP",
    title: "경산과학고 R&E · 자세 교정 디스플레이 시스템",
    html: `
      <div class="modal-grid">
        <img src="assets/rne_robot_cad.png" alt="R&E robot arm CAD design" />
        <img src="assets/rne_robot_test.webp" alt="R&E robot arm control test" />
      </div>

      <h3>연구 전개</h3>
      <p>고등학생 연구팀과 함께 얼굴 움직임을 인식하고 디스플레이 위치를 조절하는 아이디어를 구체화했습니다. 모니터암 역할의 로봇팔 기구를 CAD로 설계하고, 연구실 보유 로봇팔을 이용해 자세·속도·경로 제어를 실제로 검증했습니다.</p>

      <h3>Vision Prototype</h3>
      <img src="assets/rne_face_tracking.webp" alt="OpenCV face tracking prototype" />
      <p>OpenCV 기반 얼굴 인식 및 중심점 추적, 이동 방향·속도 벡터 계산까지 구현해 카메라 입력을 제어 신호로 연결하기 위한 전단 알고리즘을 검증했습니다. 일정 제약으로 로봇팔과 얼굴추적의 최종 실시간 통합까지는 진행하지 못했고, R&E 마감 대응을 위해 별도의 소리 기반 보안 연구도 수행했습니다.</p>

      <h3>Mentoring Role</h3>
      <ul>
        <li>연구 주제와 목표를 단계별 과제로 구조화</li>
        <li>SolidWorks 기반 기구 설계와 로봇 제어 실험 지도</li>
        <li>OpenCV 기반 얼굴 추적 알고리즘 구현 지원</li>
        <li>연구 일정에 맞춘 주제 전환과 결과물 정리</li>
      </ul>

      <div class="rne-patent-box">
        <span>PATENT APPLICATION · FROM R&E IDEA</span>
        <strong>실시간 거북목 증후군 예방 및 교정을 위한 디스플레이 위치 자동 제어 시스템</strong>
        <small>Application No. 10-2025-0134168 · Filed 2025.09.18 · Inventor 정효영</small>
      </div>
      <p>R&E에서 구체화한 자세 인식·디스플레이 자동 위치제어 아이디어를 연구 활동에만 남기지 않고 지식재산 형태로 확장했습니다.</p>
    `
  }
};

const modal = document.getElementById("projectModal");
const eyebrow = document.getElementById("modalEyebrow");
const title = document.getElementById("modalTitle");
const content = document.getElementById("modalContent");

document.querySelectorAll("[data-project]").forEach(card => {
  card.addEventListener("click", () => {
    const p = projects[card.dataset.project];
    eyebrow.textContent = p.eyebrow;
    title.textContent = p.title;
    content.innerHTML = p.html;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
